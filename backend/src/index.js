const express = require('express');
require('dotenv').config();
//variables
const port = process.env.PORT || 8000;
const app = express();

//Rutas
require('./routes')(app)

app.get('*', (req,res) => {
    res.status(200).send({
        message: 'Bienvenidos a la api de CountryPay'
    })
});
//empezando el servicio
app.listen(port)
console.log('corriendo en ', port)