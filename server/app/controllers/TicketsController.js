const db = require('../db')

// Función para crear un nuevo registro en la base de datos
function getTickets(callback) {
    db.conn.query('SELECT * FROM tickets', (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
}

// Función para crear un nuevo registro en la base de datos
function createTicket(data, callback) {
    db.conn.query('INSERT INTO tickets (titulo, descripcion, prioridad, estado, fecha, depSolicitante, comentarios) VALUES (?, ?, ?,?,?,?,?)',
        [data.titulo, data.descripcion, data.prioridad, data.estado, data.fecha, data.depSolicitante, data.comentarios], (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result.insertId);
        });
}

// Función para obtener un registro de la base de datos
// function getTicket(id, callback) {
//     db.conn.query('SELECT * FROM tickets WHERE id = ?', [id], (err, results) => {
//         if (err) {
//             callback(err, null);
//             return;
//         }
//         callback(null, results[0]);
//     });
// }

// Función para actualizar un registro en la base de datos
function updateTicket(id, data, callback) {
    db.conn.query('UPDATE tickets SET titulo = ?, descripcion = ?, prioridad = ?, estado = ?, fecha = ?, depSolicitante = ?, comentarios = ? WHERE id = ?', 
    [data.titulo, data.descripcion, data.prioridad, data.estado, data.fecha, data.depSolicitante, data.comentarios , id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result.affectedRows);
    });
}

// Función para eliminar un registro de la base de datos
function deleteTicket(id, callback) {
    db.conn.query('DELETE FROM tickets WHERE id = ?', [id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result.affectedRows);
    });
}

module.exports = {
    getTickets,
    createTicket,
    updateTicket,
    deleteTicket
}