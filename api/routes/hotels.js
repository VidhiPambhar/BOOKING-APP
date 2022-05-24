const { Router } = require("express");
const { createHotel, updateHotel, deleteHotel, getAllHotel,getSingleHotel } = require("../controllers/hotel.js");
const Hotel = require("../models/hotel.js");
const { verifyAdmin } = require("../utils/verifyToken.js");
// const {createError} = require("../utils/error.js")
const router = Router();
//CREATE
router.post("/",verifyAdmin,createHotel);
//UPDATE
router.put("/:id",verifyAdmin, updateHotel);
//DELETE
router.delete("/:id",verifyAdmin,deleteHotel);
//GET
router.get("/:id",getSingleHotel );
//GET ALL
router.get("/", getAllHotel);

module.exports = router;
