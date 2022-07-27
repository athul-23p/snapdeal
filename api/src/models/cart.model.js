const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user:{type:mongoose.Types.ObjectId,ref:'user'},
    items: [{
        product:{type: mongoose.Types.ObjectId,refPath:'docModel'},
        quantity:{type:Number,default:1,min:1,max:10}
    }]

});

module.exports = mongoose.model('cart',cartSchema);