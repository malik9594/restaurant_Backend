import mysql from 'mysql';


export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'Hassan@3133',
    database:'blog'
})