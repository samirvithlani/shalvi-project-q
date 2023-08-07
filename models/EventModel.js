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
                type:Number,
                default:1000
            },
            price:{
                type:Number,
                default:1000
            }
        },
        nonPremium:{
            seat:{
                type:Number,
                default:500
            },
            price:{
                type:Number,
                default:500
            }
        }
    },
},{
    timestamps:true,
})
module.exports = mongoose.model("event",evnetSchema);