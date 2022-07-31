const Recent = require('../models/recent.model');
const express = require('express');
const router = express.Router();

router.post('/addProduct', async (req, res) => {
  try {
    /**
     * body : {
     *      ipAddress : <ip address>
     *      product:productId,
     *      docModel:[clothing]
     * }
     */
    const { product, docModel } = req.body;
    const ip = req.socket.remoteAddress;

    let doc = await Recent.findOne({ ipAddress: ip, product }).exec();
    console.log('recent', doc);
    if (doc) {
      res.status(200).send('Already in list');
      return;
    }
    doc = await Recent.create({ ipAddress: ip, product, docModel });
    res.status(201).send('Already in list');
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
});

router.get('', async (req, res) => {
  try {
    const ip = req.socket.remoteAddress;
    const docs = await Recent.find({ ipAddress: ip }).populate('product').sort({createdAt:-1}).limit(6);
    console.log(docs);
    res.status(201).json(docs);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
