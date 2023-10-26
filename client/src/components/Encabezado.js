import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function Encabezado(props) {

    const { createTicket, buscarTicket } = props

    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [prioridad, setPrioridad] = useState('')
    const [estado, setEstado] = useState('')
    const [fecha, setFecha] = useState('')
    const [depSolicitante, setDepSolicitante] = useState('')
    const [comentarios, setComentarios] = useState('')

    const [buscar, setBuscar] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const ticket = ({
            id: uuidv4(),
            titulo,
            descripcion,
            prioridad,
            estado,
            fecha,
            depSolicitante,
            comentarios
        })
        setTitulo('')
        setDescripcion('')
        setPrioridad('')
        setEstado('')
        setFecha('')
        setDepSolicitante('')
        setComentarios('')

        createTicket(ticket)
    }

    const handleOnChange = (e) =>{
        e.preventDefault()
        setBuscar(e.target.value)
        buscarTicket(e.target.value)
    }

    const hanldeBuscar = (e) => {
        e.preventDefault()
        buscarTicket(buscar)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button type="button" className="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Crear Ticket
                    </button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Crear Ticket</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="modal-body">
                                        <div className='container'>
                                            <div className='row'>
                                                <label>Titulo :</label>
                                                <input value={titulo} type="text" placeholder='Ingrese el titulo'
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
                                                            value="espera"
                                                            checked={estado === 'espera'}
                                                            onChange={(e) => setEstado(e.target.value)}
                                                        />
                                                        En espera
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

                    <form className="d-flex" onSubmit={hanldeBuscar}>
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" onChange={handleOnChange} />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>

        </div>
    )
}

export default Encabezado
