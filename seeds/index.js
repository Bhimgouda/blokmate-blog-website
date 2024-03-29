if (process.env.NODE_ENV !== "production") require("dotenv").config();
const mongoose = require("mongoose");
const Article = require("../models/article");
const Category = require("../models/category");
const Author = require("../models/author");
const convertToSlug = require("../utils/convertToSlug");

const dbUrl =
  process.env.MONGODB_URI || "mongodb://localhost:27017/blog-website";

mongoose
  .connect(dbUrl)
  .then(() => console.log("MongoDB connected"))
  .catch((e) => console.log(e));

const seedDB = async () => {
  await Author.deleteMany();
  await Article.deleteMany();
  await Category.deleteMany();

  await Category.create({
    title: "web3",
    description: "Articles related to WEB3",
  });

  console.log("Database Seeded Successfully");
  mongoose.disconnect();
};

seedDB();
