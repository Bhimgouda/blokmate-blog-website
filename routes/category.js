const express = require("express");
const Category = require("../models/category");
const catchAsync = require("../utils/catchAsync");
const router = express.Router();

// CATEGORY INDEX PAGE

// router.get(
//   "/",
//   catchAsync(async (req, res) => {
//     const categories = await Category.find();
//     res.render("category/index", { categories });
//   })
// );

// CATEGORY SHOW PAGE

// router.get(
//   "/:id",
//   catchAsync(async (req, res) => {
//     const { id } = req.params;
//     const category = await Category.findById(id).populate("articles");
//     res.render("category/show", { category });
//   })
// );

module.exports = router;
