const Survey=require("../model/survey");
const ErrorHandler=require('../utils/Errorhandler')



exports.createSurvey=async(req,res,next)=>{
    console.log("your hit the create survey ",req.body);
   const data=req.body;
   const survey=await Survey.create({...data});
   if(!survey){
    return next(new ErrorHandler("you got the error",405));
   }
   res.status(200).json({
    message:"created survey",
    success:true,
    survey
   })

}

exports.getSurvey=async(req,res,next)=>{
    console.log("your hit the get survey ");
 
   const surveys=await Survey.find({});
   if(!surveys){
    return next(new ErrorHandler("you got the error",405));
   }
   res.status(200).json({
    message:"fetched survey",
    success:true,
    surveys
   })

}