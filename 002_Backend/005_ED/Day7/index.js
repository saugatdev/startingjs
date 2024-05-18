import express from "express";
import mysql from "mysql2"

const app= express();

let connection;
app.get("/user/add",(res,req)=>{

const{
  username,location
} =req.query

})


connection.query(`INSERT INTO users{username}`)

// Create the connection to database
 connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'testdb',
  });
app.listen(3000,()=>{

    console.log("server has started");
})

