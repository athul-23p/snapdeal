const express = require('express');
const router = express.Router();

const Cart = require('../models/cart.model');

// get cart Items
router.get('',async(req,res) => {
  try {
    const {user} = req;
    const doc = await Cart.find({user:user._id});
    res.status(200).json(doc);

  } catch (error) {
    res.status(400).send(error.message);
  }  
})

router.patch('/updateQuantity/:item/:quantity', async (req, res) => {
  try {
    const { user } = req;
    const{item,quantity} = req.params;
    let cart = await Cart.findOne({ user: user._id });
    console.log(cart);

    cart.items.id(item).quantity = quantity;
    cart = await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch('/deleteItem/:item', async (req, res) => {
  try {
    const { user } = req;
    const { item } = req.params;
    let cart = await Cart.findOne({ user: user._id });
    console.log(cart);

    cart.items.pull(item);
    cart = await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(400).send(error.message);
  }
});



// add an Item to Cart
router.post('/addItem', async (req, res) => {
  try {
    const {user} = req;
    let cart = await Cart.findOne({user:user._id});
    console.log(cart);
    
    if(cart === null){
        cart = await Cart.create({user:user,items:req.body});

    }
    
    res.status(200).json(cart);

  } catch (error) {
    res.status(400).send(error.message);
  }
});


module.exports = router;
