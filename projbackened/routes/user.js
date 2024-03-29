const express = require("express");
const router = express.Router();

const { getUserById, getUser,updateUser,userPurchaseList,createDetails} =require("../controllers/user")
const {isSignedIn, isAuthenticated, isAdmin} =require("../controllers/auth")

router.param("userId", getUserById)

router.get("/user/:userId",isSignedIn,isAuthenticated,getUser);
router.post("/user/add/:userId", isSignedIn, isAuthenticated, createDetails);

router.put("/user/:userId",isSignedIn,isAuthenticated,updateUser);




module.exports = router;
