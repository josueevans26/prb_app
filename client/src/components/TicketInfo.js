import React, { useState } from 'react'

function TicketInfo(props) {

    const { ticket, updateTicket } = props

    const [titulo, setTitulo] = useState(ticket.titulo)
    const [descripcion, setDescripcion] = useState(ticket.descripcion)
    const [prioridad, setPrioridad] = useState(ticket.prioridad)
    const [estado, setEstado] = useState(ticket.estado)
    const [fecha, setFecha] = useState(ticket.fecha)
    const [depSolicitante, setDepSolicitante] = useState(ticket.depSolicitante)
    const [comentarios, setComentarios] = useState(ticket.comentarios)

    const [modal, setModal] = useState(false)

    const handleActualiza = (e) => {
        e.preventDefault()
        alert("El cambio se realizó correctamente")
        updateTicket(ticket.id, titulo, descripcion, prioridad, estado, fecha, depSolicitante, comentarios)
    }

    const hanldeModal = async (e) => {
        e.preventDefault()
        setModal(true)
        if (modal) {
            setTitulo(ticket.titulo)
            setDescripcion(ticket.descripcion)
            setPrioridad(ticket.prioridad)
            setEstado(ticket.estado)
            setFecha(ticket.fecha)
            setDepSolicitante(ticket.depSolicitante)
            setComentarios(ticket.comentarios)
        }
    }

    return (
        <>
            <button onClick={hanldeModal} type="button" className="btn btn-sm btn-outline-warning" data-bs-toggle="modal" data-bs-target={`#modal-${ticket.id}`}>
                Actualizar Ticket
            </button>
            <div className="modal fade" id={`modal-${ticket.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Actualizar Ticket</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleActualiza}>
                            <div className="modal-body">
                                <div className='container'>
                                    <div className='row'>
                                        <label>Titulo :</label>
                                        <input type="text" placeholder='Ingrese el titulo' value={titulo}
                                            onChange={(e) => setTitulo(e.target.value)} required={true} />
                                    </div>
                                    <div className='row'>
                                        <label>Descripción :</label>
                                        <textarea value={descripcion} placeholder='Ingresa la descripción' onChange={(e) => setDescripcion(e.target.value)} rows="4" style={{ resize: 'none' }}></textarea>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <label>Prioridad :</label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="prioridad"
                                                    value="alta"
                                                    checked={prioridad === 'alta'}
                                                    onChange={(e) => setPrioridad(e.target.value)}
                                                />
                                                Alta
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="prioridad"
                                                    value="media"
                                                    checked={prioridad === 'media'}
                                                    onChange={(e) => setPrioridad(e.target.value)}
                                                />
                                                Media
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="prioridad"
                                                    value="baja"
                                                    checked={prioridad === 'baja'}
                                                    onChange={(e) => setPrioridad(e.target.value)}
                                                />
                                                Baja
                                            </label>
                                        </div>
                                        {/* <div className='row'> */}
                                        <div className='col-md-4'>
                                            <label>Estado :</label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="estado"
                                                    value="aceptado"
                                                    checked={estado === 'aceptado'}
                                                    onChange={(e) => setEstado(e.target.value)}
                                                />
                                                Aceptado
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="estado"
                                                    value="progreso"
                                                    checked={estado === 'progreso'}
                                                    onChange={(e) => setEstado(e.target.value)}
                                                />
                                                En progreso
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="estado"
                                                    value="pendiente"
                                                    checked={estado === 'pendiente'}
                                                    onChange={(e) => setEstado(e.target.value)}
                                                />
                                                Pendiente
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="estado"
                                                    value="resuelto"
                                                    checked={estado === 'resuelto'}
                                                    onChange={(e) => setEstado(e.target.value)}
                                                />
                                                Resuelto
                                            </label>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <label>Fecha :</label>
                                        <input value={fecha} type="date" placeholder='Ingrese la fecha'
                                            onChange={(e) => setFecha(e.target.value)} />
                                    </div>
                                    <div className='row mt-2'>
                                        <label>Departamento solicitante :</label>
                                        <input value={depSolicitante} type="text" placeholder='Ingrese el nombre del departamento'
                                            onChange={(e) => setDepSolicitante(e.target.value)} />
                                    </div>
                                    <div className='row mt-2'>
                                        <label>Comentarios :</label>
                                        <textarea value={comentarios} placeholder='Ingrese los comentarios' onChange={(e) => setComentarios(e.target.value)} rows="5" style={{ resize: 'none' }}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TicketInfo
