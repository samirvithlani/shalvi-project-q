const MatchModel = require("../models/MatchModel")


exports.addMatches = (async(request,response)=>{

    try{

        const data = await MatchModel.create(request.body)
        
        return response.status(202).json({
            message:"match added successfully!",
            data:data
        })
    }catch(error){
        return response.status(500).json({
            error:error,
            message:"match not created!"
        })
    }
})

exports.getAllMatchesById =(async(request,response)=>{
    try{
        const param  = request.params.id;
        
        console.log("parameter",param)

        const data = await MatchModel.findById(param);

        if(data){
            return response.status(200).json({
                message:"match fetched successfully!",
                data:data,
            })
        }else{
            return response.status(404).json({
                message:"match not found!",
                data:data,
            })
        }
        

    }catch(error){
        return response.status(500).json({
            error:error,
            message:"something went wrong!"
        })
    }
})

exports.getAllMatchs =(async(request,response)=>{
    try{
        
        
        const data = await MatchModel.find().populate("team1").
        populate("team2").populate("winner");

        if(data){
            return response.status(200).json({
                message:"match fetched successfully!",
                data:data,
            })
        }else{
            return response.status(404).json({
                message:"match not found!",
                data:data,
            })
        }
        

    }catch(error){
        return response.status(500).json({
            error:error,
            message:"something went wrong!"
        })
    }
})

exports.deleteMatch = (async(request,response)=>{
    try{
        const id = request.params.id;
        console.log(id)

       const data =  await MatchModel.findByIdAndDelete(id);

        return response.status(200).json({
            message:"match deleted successfully!",
            data:data
        })

    }catch(error){
        return response.status(500).json({
            error:error,
            message:"something went wrong!"
        })
    }
})


