// import libaries
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser') 
const connectDB = require('./db/connect');
const port = process.env.PORT || 5500;
const usernames = require('./routes/usernames'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser())
app.use('/', pets)

//initiate server
const serverInit = async () => {
    try {
        await connectDB();
        console.log('Connected to MongoDB');
        app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
serverInit();