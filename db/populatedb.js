#! /usr/bin/env node
require('dotenv').config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS message_board (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 1000 ),
  added VARCHAR ( 500 )
);

INSERT INTO message_board (username, text, added) 
VALUES
  ('Bryan', 'Hello World', '19-12-2025'),
  ('Odin', 'Im the King of Azgard', '19-12-2025'),
  ('Damon', 'Whats up my buddies', '19-12-2025');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/mini_message_board`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
