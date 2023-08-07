const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({

    
    team1:{
        type:Schema.Types.ObjectId,
        ref:"team",
    },
    team2:{
        type:Schema.Types.ObjectId,
        ref:"team",
    },
    winner:{
        type:Schema.Types.ObjectId,
        ref:"team",
    },
    event:{
        type:Schema.Types.ObjectId,
        ref:"event",
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    venue:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"upcoming"
    },
    score:{
        type:String,
        required:true
    },
    result:{
        type:String,
        required:true
    },
    
})
module.exports = mongoose.model("Match",MatchSchema);