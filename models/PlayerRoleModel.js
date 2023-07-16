const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerRoleSchema = Schema({
    name:{
        type:String,
    },
    status:{
        type:Boolean,
        default:true,
    },
    description:{
        type:String,
    }

},{
    timestamps:true,
})
module.exports = mongoose.model("playerRole",playerRoleSchema);