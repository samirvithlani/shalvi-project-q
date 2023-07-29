const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const evnetSchema = new Schema({

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
        default:"daily"
    },
    status: {
        type: Boolean,
        default: true,
    },
    teams: [{
        type: Schema.Types.ObjectId,
        ref: "team",
    }],
    price:{
        premium:{
            seat:{
                type:Number
            },
            price:{
                type:Number
            }
        },
        nonPremium:{
            seat:{
                type:Number
            },
            price:{
                type:Number
            }
        }
    },
},{
    timestamps:true,
})
module.exports = mongoose.model("event",evnetSchema);