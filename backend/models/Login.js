const mongoose = require('mongoose');
const { Schema } = mongoose;

const Login = new Schema({
  name: {type:String,
    require:true
  }, 
  email: {type:String,
    require:true,
    unique:true
  }, 
  password: {type:String,
    require:true
  }
});
module.exports=mongoose.model('login',Login);