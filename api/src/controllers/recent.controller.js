
const Recent = require('../models/recent.model');
const express = require('express');
const router = express.Router();

router.post('/addProduct',async (req,res) => {
    try {
        /**
         * body : {
         *      user: userId,
         *      product:productId,
         *      docModel:[clothing]
         * }
         */
        const {user,product} = req.body;
        let doc = await Recent.find({user,product}).exec();
       
        if(doc.length !== 0){
          res.status(200).send('Already in list')
          return ;
        }
        doc = await Recent.create(body);
        res.status(201).send(doc);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get('/:userId', async (req, res) => {
  try {
    
    const { userId } = req.params;
    const docs = await Recent.find({user:userId}).populate('product');
    res.status(201).json(docs);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
