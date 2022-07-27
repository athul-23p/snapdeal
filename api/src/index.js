const express = require('express');
const cors = require('cors');

const app = express();

const authController = require('./controllers/auth.controller');
const locationController = require('./controllers/location.controller');
const productController = require('./controllers/product.controller');
const recentController = require('./controllers/recent.controller');
const trendingController = require('./controllers/trending.controller');
const cartController = require('./controllers/cart.controller');

const {signup,login,getUser} = authController;
const authenticate = require('./middlewares/authenticate');

app.use(cors());
app.use(express.json());
app.use('/location',locationController);
app.use('/products',productController);
app.use('/recent',recentController);
app.use('/trending', trendingController);
app.use('/cart',authenticate,cartController);

app.post('/auth/login',login);
app.post('/auth/signup',signup);
app.get('/auth/getUser/:useremail', getUser);

app.get('/',async(req,res) => {
    try {
        res.status(200).send("snapdeal api")
    } catch (error) {
        res.status(400).send("Bad request");
    }
})

module.exports = app;
