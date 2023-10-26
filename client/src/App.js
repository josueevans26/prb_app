import { useEffect, useState } from "react";
import Encabezado from "./components/Encabezado";
import TicketsList from "./components/TicketsList";
import axios from 'axios'

function App() {

  let endpoint = 'http://localhost:8080/api/tickets'

  const [tickets, setTickets] = useState([])

  const [busRes, setBusRes] = useState([])

  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    getTickets()
  }, [])

  const getTickets = async () => {
    try {
      const response = await axios.get(endpoint)
      setTickets(response.data.result)
      console.log(`${response.data.message}`);
    } catch (error) {
      console.log("Error al obtener tickets")
    }
  }

  const createTicket = async (ticket) => {
    try {
      const { titulo, descripcion, prioridad, estado, fecha, depSolicitante, comentarios } = ticket
      const response = await axios.post(endpoint, { titulo: titulo, descripcion: descripcion, prioridad: prioridad, estado: estado, fecha: fecha, depSolicitante: depSolicitante, comentarios: comentarios })
      console.log(`${response.data.message} con ID: ${response.data.id}`);
      getTickets()
    } catch (error) {
      console.log("Error al intentar insertar")
    }
  }

  const updateTicket = async (id, titulo, descripcion, prioridad, estado, fecha, depSolicitante, comentarios) => {
    try {
      const response = await axios.put(`${endpoint}/${id}`, { titulo: titulo, descripcion: descripcion, prioridad: prioridad, estado: estado, fecha: fecha, depSolicitante: depSolicitante, comentarios: comentarios })
      console.log(`${response.data.message} updates en: ${response.data.updates}`);
      getTickets()
    } catch (error) {
      console.log("Error al intentar actualizar");
    }
  }

  const deleteTicket = async (id) => {
    try {
      const response = await axios.delete(`${endpoint}/${id}`)
      console.log(`${response.data.message} delete en: ${response.data.updates}`);
      getTickets()
    } catch (error) {
      console.log("Error al intentar borrar");
    }
  }

  useEffect(() => {
    buscarTicket(busqueda)
  }, [tickets])

  const buscarTicket = (buscar) => {
    setBusqueda(buscar)
    const resultado = tickets.map((ticket) => {
      for (const key in ticket) {
        if (typeof ticket[key] === 'string' &&
          ticket[key].toLowerCase().includes(buscar.toLowerCase())
        ) {
          return ticket
        }
      }
      return null
    })
    setBusRes(resultado.filter((ticket) => ticket !== null));
    console.log(busRes);
  }

  return (
    <>
      <Encabezado tickets={tickets} createTicket={createTicket} buscarTicket={buscarTicket} />
      <div className="container">
        <TicketsList tickets={tickets} updateTicket={updateTicket} deleteTicket={deleteTicket} busqueda={busqueda} busRes={busRes} />
      </div>
    </>
  );
}

export default App;
