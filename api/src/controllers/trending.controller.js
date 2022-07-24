const Trending = require('../models/trending.model');
const express = require('express');
const router = express.Router();

router.post('/addProduct', async (req, res) => {
  try {
    /**
     * body : {
     *      product:productId,
     *      docModel:[clothing]
     * }
     */
    const { product } = req.body;
    let doc = await Trending.find({product}).exec();
     if (doc.length !== 0) {
       res.status(200).send('Already in list');
       return;
     }
    
    doc = await Trending.create(body);
    res.status(201).send(doc);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get('', async (req, res) => {
  try {
    const docs = await Trending.find().populate('product');
    res.status(201).json(docs);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
