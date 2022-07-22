
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    pincode:{type:Number,required:true}
},{
    timestamps:true
});


module.exports = mongoose.model('location',locationSchema);