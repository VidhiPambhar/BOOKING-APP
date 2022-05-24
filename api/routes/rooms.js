const { Router } = require("express");
const { createRoom, updateRoom, deleteRoom, getSingleRoom,getAllRoom } = require("../controllers/room.js");
const room = require("../models/room.js");
const { verifyAdmin } = require("../utils/verifyToken.js");
// const {createError} = require("../utils/error.js")
const router = Router();
//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);
//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET
router.get("/:id",getSingleRoom );
//GET ALL
router.get("/", getAllRoom);

module.exports = router;
