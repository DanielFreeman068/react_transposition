const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require("dotenv").config();
const transpositionRoute = require("./routes/controllerRouter");
const connectDB = require("./db/connect");
const port = 5000

// Middleware
app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())


//Body Parser
app.use(express.urlencoded({extended : false}));

// CheckPath
app.get('/',(req,res)=>{
    res.send('Server is Working')
})

//Routes
app.use("/users", transpositionRoute);
app.use("/scores", transpositionRoute);

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

