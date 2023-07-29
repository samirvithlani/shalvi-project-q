const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TicketSchema = new Schema({
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
        seatType:{
            type:String
        },
        person:{
            type:Number
        }
    },
    price:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true,
        default:true
    },

})
module.exports = mongoose.model("Ticket",TicketSchema);