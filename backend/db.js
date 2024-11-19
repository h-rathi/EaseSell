const mongoose=require('mongoose');

const run= async ()=>{
     await mongoose.connect('mongodb://localhost:27017/easesell')
     console.log("connected")
}
module.exports=run;
