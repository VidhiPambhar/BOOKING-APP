const express =require ("express");
const dotenv =require( "dotenv");
const authRoute =require ("./routes/auth")
const hotelsRoute =require ("./routes/hotels")
const usersRoute =require ("./routes/users")
const roomsRoute =require ("./routes/rooms")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("./config/config")

dotenv.config();
const app = express();
const port = 8888;


app.use( bodyParser.urlencoded({extended : true }));
app.use( bodyParser.json() );
app.use(cookieParser())
//middleware

app.use(express.json())
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);
app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack,
  })
 })
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
