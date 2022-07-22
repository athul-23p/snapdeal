
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    password:{type:String,required:true},
    dob:{type:Date,required:true},
    email : {type:String,required:true},
    phone: {type:String}
},{
    timestamps:true
});

userSchema.pre('save', function (next) {
  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('user',userSchema);




