const express = require('express');
const router = express.Router();

const Location = require('../models/location.model');


router.get('/availiability/:pincode',async (req,res) => {
    try {
        const doc = await Location.findOne({pincode:req.params.pincode}).exec();
        console.log(doc);
        if(doc){
            res.status(200).json({isDeliverable:true});
            return;
        }
        res.status(200).json({isDeliverable:false});

    } catch (error) {
        res.status(400).send("Something went wrong");
    }
});

router.post('',async(req,res) => {
    try {
        const {body} = req;
        console.log(body);
        const loc = await Location.findOne({pincode:body.pincode});
        if(loc){
            res.status(200).send("location already exists");
            return;
        }
        const doc = await Location.create(body);
        console.log(doc);
        res.status(201).json(doc);

    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;