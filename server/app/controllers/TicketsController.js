const db = require('../db')

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
function getRecord(id, callback) {
    db.conn.query('SELECT * FROM tabla WHERE id = ?', [id], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results[0]);
    });
}

// Función para actualizar un registro en la base de datos
function updateRecord(id, data, callback) {
    db.conn.query('UPDATE tabla SET campo1 = ?, campo2 = ?, campo3 = ? WHERE id = ?', [data.valor1, data.valor2, data.valor3, id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result.affectedRows);
    });
}

// Función para eliminar un registro de la base de datos
function deleteRecord(id, callback) {
    db.conn.query('DELETE FROM tabla WHERE id = ?', [id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result.affectedRows);
    });
}

module.exports = {
    createTicket
}