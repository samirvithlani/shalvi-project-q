const roleModel = require('../models/RoleModel');

const addRole = async (req, res) => {

    const role = new roleModel(req.body)
    role.save().then((data)=>{
        res.status(201).json({
            message:"Role added successfully",
            data:data,
        })
    }).catch((err)=>{
        res.status(500).json({
            message:"Something went wrong",
            error:err,
        })
    })
}

const getRoles = async (req, res) => {
    roleModel.find().then((data)=>{
        res.status(200).json({
            message:"Roles fetched successfully",
            data:data,
        })
    }).catch((err)=>{
        res.status(500).json({
            message:"Something went wrong",
            error:err,
        })
    })
}

module.exports = {
    addRole,
    getRoles,
}