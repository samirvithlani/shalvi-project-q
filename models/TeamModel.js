const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = Schema({

    
    name:{
        type:String,
    },
    status:{
        type:Boolean,
        default:true,
    },
    description:{
        type:String,
    },
    players:[{
        type:Schema.Types.ObjectId,
        ref:"player",
    }],
    event:{
        type:Schema.Types.ObjectId,
        ref:"event",
    }

},{
    timestamps:true,
})
module.exports = mongoose.model('team',teamSchema);