const express = require("express");
//const { requireSignin, isAdmin } = require("../controllers/auth.js");
// const {
//   userById,
//   userBySlug,
//   hasAuthorization,
// } = require("../controllers/jobs.js");
const {
  createPost,
  getPosts,
  singlePost,
  updatePost,
  deletePost,
} = require("../controllers/interview.js");

//Initializing Router

const router = express.Router();

//@path     GET  /api/interview/all
//@desc     Get all the Posts
//@access   PUBLIC
router.get("/all", getPosts);


//@path     GET  /api/interview/:postId
//@desc     Get Single Post by PostSlug
//@access   PUBLIC
router.get("/:postId", singlePost);

//@path     POST /api/interview/new
//@desc     Create a new POST
//@access   PRIVATE
router.post("/new", createPost);

//@path     PUT /api/interbiew/:postId
//@desc     Update a Post by postId . Only creator/Admin can update the Post
//@access   PRIVATE
router.put("/:postId", updatePost);

//@path     DELETE /api/interview/:postId
//@desc     Delete a Post by postId . Only creator/Admin can Delete the Post
//@access   PRIVATE
router.delete("/:postId",  deletePost);

module.exports = router;
