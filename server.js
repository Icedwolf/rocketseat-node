const express = require('express');

const app = express(); //instanciando

app.get('/', (req, res) => {
    res.send("Hello World"); //resposta
});

app.listen(3001); //porta