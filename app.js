const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const roleRoutes = require("./routes/RoleRoutes");
const userRoutes = require("./routes/UserRoutes");


const PORT = 5000;

//database connection

mongoose.connect("mongodb://127.0.0.1:27017/quidditch", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("Connection with database Successful");
}).catch((err)=>{
    console.log(err);
})

//server creation


//routes entries...

app.use('/role',roleRoutes)
app.use('/user',userRoutes)





app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
