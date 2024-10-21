import mysql from 'mysql';


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog'
})


db.connect(function(err){
    if(err){
        console.log("Connection is not established");
    }
    else{
        console.log("mysql connection is established.")
    }
})
export default db;