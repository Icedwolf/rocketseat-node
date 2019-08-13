const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express(); //instanciando

// Iniciando Db
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);

//import all models
requireDir('./src/models');

const Product = mongoose.model('Product');

// req = request | res = response
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'build native apps with react',
        url: 'https://github.com/facebook/react-native'
    });
    return res.send("Hello World"); //resposta
});

app.listen(3001); //porta