const pool = require('./pool');

async function getTable() {
    const {rows} = await pool.query('select * from message_board');
    return rows;
}

async function insertMessage(username, message, date) {
    await pool.query(`
        INSERT INTO message_board
        (username, text, added)
        VALUES
        ('${username}', '${message}', '${date}');
        `)   
}

module.exports = {
    getTable,
    insertMessage,
}