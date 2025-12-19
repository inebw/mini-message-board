const pool = require('./pool');

async function getTable() {
    const {rows} = await pool.query('select * from message_board');
    return rows;
}

async function insertMessage(username, message, date) {
    const {rows} = await pool.query('select count(*) from message_board;')
    await pool.query(`
        INSERT INTO message_board
        (id, username, text, added)
        VALUES
        (${parseInt(rows[0].count + 1)}, '${username}', '${message}', '${date}');
        `)   
}

module.exports = {
    getTable,
    insertMessage,
}