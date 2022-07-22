const express = require('express');
const cors = require('cors');

const app = express();

const authController = require('./controllers/auth.controller');

const {signup,login} = authController;
app.use(cors());
app.use(express.json());

app.post('/auth/login',login);
app.post('/auth/signup',signup);
app.get('/',async(req,res) => {
    try {
        res.status(200).send("snapdeal api")
    } catch (error) {
        res.status(400).send("Bad request");
    }
})

module.exports = app;
