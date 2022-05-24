const {createError} = require("../utils/error.js")
const Hotel = require("../models/hotel.js");
 const createHotel = async(req,res,next)=>{
    try {
        const hotel = await Hotel.create(req.body);
        res.status(200).json({ hotel });
      } catch (err) {
        console.log(err);
      next(err)
      }
}

 const updateHotel = async(req,res,next)=>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json({ updatedHotel });
      } catch (err) {
        console.log(err);
        next(err)
      
      }
}

 const getSingleHotel = async(req,res,next)=>{
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json({ hotel });
      } catch (err) {
        console.log(err);
       next(err)
      }
}

 const getAllHotel = async(req,res,next)=>{
    const failed = true;
  
    // if(failed) return next(createError(401,"You are not authenticated!"))
    try {
      const hotel = await Hotel.find(req.body);
      res.status(200).json({ hotel });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
}

 const deleteHotel = async(req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id);
         res.status(200).json("Hotel has been successfully deleted");
       } catch (err) {
         console.log(err);
         res.status(400).json(err);
       }
}

module.exports = { createHotel, updateHotel, getSingleHotel, getAllHotel, deleteHotel };