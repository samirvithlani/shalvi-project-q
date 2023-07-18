const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://user1:user1@cluster0.1vpdl.mongodb.net/BXI-development?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 100,
}).then(()=>{
    console.log("Connection with database Successful");
}).catch((err)=>{
    console.log(err);
})
