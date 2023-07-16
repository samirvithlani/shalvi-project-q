const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const evnetSchema = Schema({

    name: {
        type: String,
    },
    venue: {
        type: String,
    },
    eventDate:{
        type:Date,
    },
    eventTime:{
        type:String,
    },
    eventType:{
        type:String,
    },
    status: {
        type: Boolean,
        default: true,
    },
    teams: [{
        type: Schema.Types.ObjectId,
        ref: "team",
    }]
},{
    timestamps:true,
})
module.exports = mongoose.model("event",evnetSchema);