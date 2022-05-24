const { Router } = require("express");
const { updateUser, deleteUser, getSingleUser,getAllUser } = require("../controllers/user.js");
const { verifyToken, verifyUser, verifyAdmin } = require("../utils/verifyToken.js");
// const User = require("../models/user.js");
const router = Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete ur account")
//   })

//   router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("hello admin, you are logged in and you can delete ur account")
//   })
//UPDATE
router.put("/:id",verifyUser, updateUser);
//DELETE
router.delete("/:id",verifyUser,deleteUser);
//GET
router.get("/:id",verifyUser,getSingleUser );
//GET ALL
router.get("/", verifyAdmin,getAllUser);

module.exports = router;
