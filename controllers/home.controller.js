
exports.getHome = (request, response)=>{
    response.sendFile("/home/dev/Desktop/nodejs_hit/views/index.html");
}

exports.getLogin = (request, response)=>{
    response.sendFile("/home/dev/Desktop/nodejs_hit/views/login.html");
}


// const getHome = (request, response)=>{
//     response.sendFile(__dirname +"/views/index.html");
// }

// const getLogin = (request, response)=>{
//     response.sendFile(__dirname +"/views/index.html");
// }

// module.exports = {
//     getHome,
//     getLogin
// }