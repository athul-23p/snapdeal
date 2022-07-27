const User = require('../models/user.model.js');
const jwt = require('jsonwebtoken');

const generateToken = user => jwt.sign({ user }, process.env.SECRET_KEY);
const signup = async (req, res) => {
  try {
    // check if email is already registred
   
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    if (user) {
      return res.status(400).send({ msg: 'Email is already registered' });
    }

    user = await User.create(req.body);

    return res.status(201).send(user);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).send('Wrong Email or Password');
    }

    const match = user.checkPassword(req.body.password);

    if (!match) {
      return res.status(400).send('Wrong Email or Password');
    }

    const token = generateToken(user);
    return res.status(200).send({ user, token });
  } catch (error) {
    return res.status(400).send(error);
  }
};
const getUser = async(req,res) => {
  try {
    const user = await User.find({'email':req.params.useremail});
    if(user.length === 0){
      res.status(200).json({userExists:false,email:null});
      return ;
    }
    res.status(200).json({userExists: true,email:user[0].email});
  } catch (error) {
    return res.status(400).send(error);
    
  }
}
module.exports = { signup, login,getUser };
