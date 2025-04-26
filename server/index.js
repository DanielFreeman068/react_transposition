const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require("dotenv").config();
const transpositionRoute = require("./routes/controllerRouter");
const connectDB = require("./db/connect");
const port = 5000

<<<<<<< HEAD
app.use(cors({
    origin: 'https://react-transposition.onrender.com', // or an array of allowed origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));

=======
>>>>>>> parent of 28e7c2e (Update index.js)
// Middleware
app.use(morgan('tiny'))
app.use(express.json())


//Body Parser
app.use(express.urlencoded({extended : false}));

// CheckPath
app.get('/',(req,res)=>{
    res.send('Server is Working')
})

//Routes
app.use("/", transpositionRoute);

//run server
const initServer = async() => {
    try {
        await connectDB("mongodb+srv://mongo-template-user:zCIqXOLxAVZXWLeI@task-manager-practice.ixadl.mongodb.net/Cipher-league?retryWrites=true&w=majority");
        app.listen(port, () => {
            console.log("Listening on port 5000");
        })
    } catch(err) {
        console.log(err);
    }
}
initServer();

