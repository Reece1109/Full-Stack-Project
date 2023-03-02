const express = require('express');

// route
const route = require('./controllers/index');

// cors
const cors = require('cors');

// port
const port = parseInt(process.env.PORT) || 3000;

// Express app
const app = express();

const cookieParser = require('cookie-parser');

const {errorHandling} = require('./middleware/errorHandling')



app.use((req, res, next)=> {
        res.header('Access-Control-Allow-Origin', '*')
        res.header("Access-Control-Allow-Credentials", "true")
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Headers", "*")
        next();
});
app.use(route);
app.use(
    cors(),
    cookieParser(),
    express.json(),
    express.urlencoded({extended: false})
)


// The Server is running
app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
});

// The Handling of all errors
app.use(errorHandling);