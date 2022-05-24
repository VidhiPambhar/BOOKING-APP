const {createError} = require("../utils/error.js")
const User = require("../models/user.js");


 const updateUser = async(req,res,next)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json({ updatedUser });
      } catch (err) {
        console.log(err);
        next(err)
      
      }
}

 const getSingleUser = async(req,res,next)=>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({ user });
      } catch (err) {
        console.log(err);
       next(err)
      }
}

 const getAllUser = async(req,res,next)=>{
    const failed = true;
  
    // if(failed) return next(createError(401,"You are not authenticated!"))
    try {
      const user = await User.find(req.body);
      res.status(200).json({ user });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
}

 const deleteUser = async(req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
         res.status(200).json("User has been successfully deleted");
       } catch (err) {
         console.log(err);
         res.status(400).json(err);
       }
}

module.exports = {  updateUser, getSingleUser, getAllUser, deleteUser };