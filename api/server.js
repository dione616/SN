require("dotenv").config();

const express = require("express");
const { Config } = require("./config");
const postRoutes = require("./src/controllers/posts");

const app = express();

app.use("/posts", postRoutes);
/*<------------ HOME ------------>*/
app.get("/", async (_req, res, next) => {
  try {
    res.send(`Hello World!`);
  } catch (error) {
    next(error);
  }
});

/*<------------ POSTS ------------>*/

/* app.get("/posts", async (_req, res, next) => {
  try {
    res.send(`All posts`);
  } catch (error) {
    next(error);
  }
});
app.get("/posts/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    res.send(`<h1>Post with id: ${id}</h1>`);
  } catch (error) {
    next(error);
  }
});
app.post("/posts", async (_req, res, next) => {
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
app.put("/posts/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    //update post by id with new data
    res.status(200).send(`Successfuly updated: ${id}!`);
  } catch (error) {
    next(error);
  }
});
app.delete("/posts/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    //delete post by id
    res.status(200).send(`Successfuly deleted: ${id}!`);
  } catch (error) {
    next(error);
  }
}); */

const PORT = Config.getProperty("PORT");

app.listen(PORT, () => {
  console.log(`[Server] is running on port: ${PORT}`);
});
