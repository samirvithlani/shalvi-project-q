const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"user",
    },
    playerRole:{
        type:Schema.Types.ObjectId,
        ref:"playerRole",
    }
},{
    timestamps:true,

})
module.exports = mongoose.model("player",playerSchema);