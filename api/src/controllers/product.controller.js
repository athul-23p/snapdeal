
const express = require('express');
const router = express.Router();
const Clothing = require('../models/clothing.model');

router.get('/clothing/:id',async (req,res) => {
  try {
    const {id} = req.params;
    const doc  = await Clothing.findById(id).exec();
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get('/clothing/:gender',async (req,res) => {
    try {
        const {gender} = req.params;

        const docs = await Clothing.find({gender}).exec();

        res.status(200).json(docs);
        
    } catch (error) {
        res.status(400).send(error.message);
    }

});

router.post('/clothing/add', async (req, res) => {
  try {
    const { body } = req;

    const docs = await Clothing.create(body);

    res.status(201).json(docs);
  } catch (error) {
    res.status(400).send(error.message);
  }
});




module.exports = router;