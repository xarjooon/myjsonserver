// import json-server
const jsonServer= require('json-server')

// 2 create json server

const mediaPlayerServer = jsonServer.create()

// 3 create a connection to db.json it uses a method named router 

const router = jsonServer.router('db.json');

// 4 create a middleware
const middleware= jsonServer.defaults();

// 5 use this middleware
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

const port = 5000;

mediaPlayerServer.listen(port,()=>{
    console.log(`server is up and running inport ${port}`);
})