const express = require('express');

const app = express();

const port = 3000;

const homeRouter = require("./routes/home.route")


// app.get("/login", (request, response)=>{
//     response.sendFile(__dirname +"/views/login.html");
// })

// app.get("/register", (request, response)=>{
//     response.sendFile(__dirname +"/views/register.html");
// })

app.use("/", homeRouter)

/**
 * get // doc ra du lieu
 * post // gui du lieu len server, tao du lieu moi
 * put // gui du lieu len server dung de chinh sua
 * patch // gui du lieu len server dung de chinh sua
 * delete // gui du lieu len server dung de xoa dua lieu
 */

app.listen(port, ()=>{
    console.log("listening on port " + port);
});