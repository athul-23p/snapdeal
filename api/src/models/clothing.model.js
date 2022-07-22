const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, default: 0, min: 0 },
    orig_price: { type: Number },
    disc_perc: { type: Number, default: 0 },
    rating: {
      rate: { type: Number, default: 0 },
      reviews: { type: Number, default: 0 },
      selfies: { type: Number, default: 0 },
      ratings: { type: Number, default: 0 },
    },
    img:{type:String,required:true},
    sizes: [String],
    color: { type: String },
    fabric: { type: String },
    brand: { type: String },
    gender: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('clothing',clothingSchema);


