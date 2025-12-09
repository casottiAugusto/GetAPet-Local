const express = require('express');
const cors = require('cors');
const UserRoutes =require('./routes/UserRoutes')


const app = express();

//Solve CORS - deve vir antes dos parsers
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

//Config JSON response - parsers de body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Public folder for images
app.use(express.static('public'));


//Routes
app.use('/users',UserRoutes)


app.listen(5000, () => console.log('Servidor rodando na porta 5000'))