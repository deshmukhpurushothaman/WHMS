const express = require('express');
const { createOrder } = require('../controllers/order');

//Initializing Router
const router = express.Router();

//Routers

//@path     GET  /api/jobs/all
//@desc     Get all the Users
//@access   PUBLIC
//router.get("/all", getJobs);

//@path     POST /api/jobs/new
//@desc     Create a new POST
//@access   PRIVATE
router.post('/create', createOrder);

//router.get("/:postSlug", singleJob);

//@path     PUT /api/jobs/:postId
//@desc     Update a Post by postId . Only creator/Admin can update the Post
//@access   PRIVATE
//router.put("/:postId", updateJob);

//@path     DELETE /api/jobs/:postId
//@desc     Delete a Post by postId . Only creator/Admin can Delete the Post
//@access   PRIVATE
//router.delete("/:postId", deleteJob);

module.exports = router;
