const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
    matchId:{
        type:String,
        required:true
    },
    team1:{
        type:Schema.Types.ObjectId,
        ref:"Team",
    },
    team2:{
        type:Schema.Types.ObjectId,
        ref:"Team",
    },
    winner:{
        type:Schema.Types.ObjectId,
        ref:"Team",
    },
    event:{
        type:Schema.Types.ObjectId,
        ref:"Event",
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
        required:true
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