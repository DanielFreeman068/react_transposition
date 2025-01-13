const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require("dotenv").config();
const transpositionRoute = require("./routes/controllerRouter");
const connectDB = require("./db/connect");
const port = 5000

app.use((req,res,next) => {
    const allowedOrigins = ['https://react-transposition-backend.onrender.com'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

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
        await connectDB("mongodb+srv://mongo-template-user:TJGx0Jlpwr2qEqVX@task-manager-practice.ixadl.mongodb.net/Cipher-league?retryWrites=true&w=majority");
        app.listen(port, () => {
            console.log("Listening on port 5000");
        })
    } catch(err) {
        console.log(err);
    }
}
initServer();

