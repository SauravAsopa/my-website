const express = require('express');
const router = express.Router();
const Team = require('../models/team');
const Category = require('../models/categories');
const BlogList = require('../models/blog-list');
const homeMgmt = require('../controllers/home_mgmt')

router.get('/home/carousel_content', homeMgmt.carouselContent)
router.get('/home/team_details', homeMgmt.teamDetails)
router.get('/home/categories', homeMgmt.categories);

router.get('/blog/blog_details', (req, res, next) => {
  BlogList.find().then(
    data => {
      res.send(data);
    }
  ).catch(
    error => {
      console.log(error);
    }
  )
})

router.get('/blog/blog_info/', (req, res, next) => {
  const id = req.params.id;
  Category.findById(id).then(
    res => {
      console.log(res);
    }
  )
})

module.exports = router;
