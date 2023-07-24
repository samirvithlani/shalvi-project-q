const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TicketSchema = new Schema({
    ticketId:{
        type:String,
        required:true,
        unique:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    event:{
        type:Schema.Types.ObjectId,
        ref:"Event",
    },
    match:{
        type:Schema.Types.ObjectId,
        ref:"Match",
    },
    seat:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    status:{
        type:boolean,
        required:true,
        default:true
    },

})
module.exports = mongoose.model("Ticket",TicketSchema);