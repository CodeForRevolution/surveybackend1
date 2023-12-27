const express=require("express");
const app=express();
const cookieParser =require("cookie-parser");



const cors=require("cors")


// app.use(cors({ 
//     origin: 'http://localhost:3000', 
//     credentials: true 
//   }));


  const allowedOrigins = ['http://localhost:3000', 'https://survey-xi-liart.vercel.app', ];

  app.use(cors({
    origin: allowedOrigins,
    credentials: true,
  }));



app.use(express.json());
app.use(cookieParser());

const errormiddleware=require("./middleware/error")



app.use("/api/v1/",require("./Route/userRoute"));

app.use("/api/v1/",require("./Route/SurveyRoute"));

//middleware for the Error
app.use(errormiddleware);
module.exports=app;