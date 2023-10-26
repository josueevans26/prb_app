import React, { useState, useEffect } from 'react'
import TicketInfo from './TicketInfo'

function TicketsList(props) {

    const { tickets, updateTicket, deleteTicket, busqueda, busRes } = props

    const [arr, setArr] = useState([])

    useEffect(() => {
        if (tickets.length === 0) {
            setArr([])
        } else {
            if (busqueda.length !== 0) {
                if (busRes.length === 0) {
                    setArr([])
                } else {
                    setArr(busRes)
                }
            } else {
                setArr(tickets)
            }
        }
        console.log("dentro")
    }, [tickets, busqueda, busRes])

    //tickets cambia al insertar, eliminar, actualizar un nuevo registro
    //busqueda cambia si se escribe algo
    //busRes cambia si se encuentra o no resultados

    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Prioridad</th>
                                <th>Estado</th>
                                <th>Fecha Creación</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arr.map((ticket) => (
                                    <tr key={ticket.id}>
                                        <td>{ticket.titulo}</td>
                                        <td>{ticket.prioridad}</td>
                                        <td>{ticket.estado}</td>
                                        <td>{ticket.fecha}</td>
                                        <td><button type="button" className="btn btn-sm btn-outline-danger" onClick={() => deleteTicket(ticket.id)}>Eliminar</button>
                                            <TicketInfo ticket={ticket} updateTicket={updateTicket} />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TicketsList
