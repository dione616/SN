const express = require("express");

let router = express.Router();

router.get("/", async (_req, res, next) => {
  try {
    res.send(`All posts`);
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    res.send(`<h1>Post with id: ${id}</h1>`);
  } catch (error) {
    next(error);
  }
});
router.post("/", async (_req, res, next) => {
  try {
    const newPost = {
      id: "0",
      title: "New Post",
      description: "New post description",
      image: "https://images/...",
      likes: 0,
    };
    //push data to db
    res.send("Successfuly added!");
  } catch (error) {
    next(error);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    //update post by id with new data
    res.status(200).send(`Successfuly updated: ${id}!`);
  } catch (error) {
    next(error);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    //delete post by id
    res.status(200).send(`Successfuly deleted: ${id}!`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
