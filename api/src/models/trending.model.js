const mongoose = require('mongoose');
const trendingSchema = new mongoose.Schema(
  {
    
    product: { type: mongoose.Types.ObjectId, refPath: 'docModel' },
    docModel: {
      type: String,
      required: true,
      enum: ['clothing'],
    },
    createdAt:{type:Date,default:Date.now}
  },
  {
    timeseries: {
      timeField: 'createdAt',
    },
    expireAfterSeconds: 12 * 24 * 60 * 60,
  }
);

module.exports = mongoose.model('trending', trendingSchema);
