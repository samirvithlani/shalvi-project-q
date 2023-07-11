const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    role:{
        type:Schema.Types.ObjectId,
        ref:"role",
    }
},{
    timestamps:true,
})

module.exports = mongoose.model("user",userSchema);