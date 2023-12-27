const express=require("express");
const app=express();
const cookieParser =require("cookie-parser");
const cors=require("cors")
  const allowedOrigins = ['http://localhost:3000', 'https://survey-xi-liart.vercel.app', ]; // setting list of origin that can request in server
  app.use(cors({
    origin: allowedOrigins,
    credentials: true,
  }));
app.use(express.json());
app.use(cookieParser());
const errormiddleware=require("./middleware/error")
app.use("/api/v1/",require("./Route/userRoute"));// directing route to user Route
app.use("/api/v1/",require("./Route/SurveyRoute"));// directing  route to surveyRoute
//middleware for the Error
app.use(errormiddleware);
module.exports=app;