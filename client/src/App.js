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
    fetch('/json/datos.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setTickets(jsonData)
      })
      .catch((error) => {
        console.error('Error al cargar el archivo JSON:', error)
      })
  }, [])

  const createTicket = async (ticket) => {
    try {
      const { titulo, descripcion, prioridad, estado, fecha, depSolicitante, comentarios } = ticket
      await axios.post(endpoint, { titulo: titulo, descripcion: descripcion, prioridad: prioridad, estado: estado, fecha: fecha, depSolicitante: depSolicitante, comentarios: comentarios })
    } catch (error) {
      console.log("Error al intentar insertar")
    }
  }

  // const createTicket = (ticket) => {
  //   console.log(ticket)
  //   setTickets((tickets) => [...tickets, ticket])
  // }

  const updateTicket = (id, titulo, descripcion, prioridad, estado, fecha, depSolicitante, comentarios) => {
    const ticketsAct = tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, titulo, descripcion, prioridad, estado, fecha, depSolicitante, comentarios };
      }
      return ticket
    })
    setTickets(ticketsAct)
    console.log();
  }

  const deleteTicket = (id) => {
    const ticketsAct = tickets.map((ticket) => {
      if (ticket.id === id) {
        return null
      }
      return ticket
    })
    setTickets(ticketsAct.filter((ticket) => ticket !== null))
  }

  useEffect(() => {
    buscarTicket(busqueda)
  }, [tickets])

  const buscarTicket = (buscar) => {
    setBusqueda(buscar)
    const resultado = tickets.map((ticket) => {
      for (const key in ticket) {
        if (
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
