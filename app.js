const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());
const roleRoutes = require("./routes/RoleRoutes");
const userRoutes = require("./routes/UserRoutes");
const teamRoutes = require("./routes/TeamRoutes");
const playerRoutes = require("./routes/PlayerRoutes");
const eventRoutes = require("./routes/EventRoutes");
const playerRoleRoutes = require("./routes/PlayerRoleRoutes");
const matchRoutes = require("./routes/MatchesRoutes")


const PORT = 5000;

//database connection

mongoose.connect("mongodb+srv://samir:samir@cluster0.key63fx.mongodb.net/quidditch", {
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
app.use('/team',teamRoutes)
app.use('/player',playerRoutes)
app.use('/event',eventRoutes)
app.use('/playerRole',playerRoleRoutes)
app.use("/match",matchRoutes)





app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
