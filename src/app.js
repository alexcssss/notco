const path = require('path');
const morgan = require('morgan');
const express = require("express");

const app = express();

// Static files
app.use(express.static(path.join(__dirname,'public')));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(morgan('dev'));  //Ver que peticiones nos da el cliente por consola

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');



// Routes
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Starting server
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
});