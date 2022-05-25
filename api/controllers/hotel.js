const { createError } = require("../utils/error.js");
const Hotel = require("../models/hotel.js");
const Room = require("../models/room.js");
const createHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(200).json({ hotel });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ updatedHotel });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getSingleHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json({ hotel });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getAllHotel = async (req, res, next) => {

const {min,max,...others} = req.query;
  try {
    const hotel = await Hotel.find({...others,cheapestPrice:{$gt:min | 1,$lt:max || 999}}).limit(req.query.limit);
    res.status(200).json( hotel );
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been successfully deleted");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

const countByType = async (req, res, next) => {
  try {
    const hotelCount =await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount =await Hotel.countDocuments({ type: "apartment" });
    const restaurantCount =await Hotel.countDocuments({ type: "restaurant" });
    const villaCount =await Hotel.countDocuments({ type: "villa" });
    const cabinCount =await Hotel.countDocuments({ type: "cabin" });
    res.status(200).json([
      {type:"hotel",count:hotelCount},
      {type:"apartment",count:apartmentCount},
      {type:"restaurant",count:restaurantCount},
      {type:"villa",count:villaCount},
      {type:"cabin",count:cabinCount},

    ])
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createHotel,
  updateHotel,
  getSingleHotel,
  getAllHotel,
  deleteHotel,
  countByCity,
  countByType,
};
