const mongoose =require('mongoose');

const User = new mongoose.Schema({
    firstName:{ type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    phone:{type:String, required:true}
},
{collection:'user'}
)

const SomeModel=mongoose.model('SomeModel',User)
module.exports=SomeModel; 