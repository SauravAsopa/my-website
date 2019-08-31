const Header = require('../models/header');
const Team = require('../models/team');
const Category = require('../models/categories');

var homeController = {
  carouselContent: (req, res, next) => {
    Header.find().then(
      data => {
        console.log(data);
        res.send(data);
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
  },
  teamDetails: (req, res, next) => {
    Team.find().then(
      data => {
        res.send(data);
      }
    ).catch(error => {
      console.log(error);
    })
  },
  categories: (req, res, next) => {
    Category.find().then(
      data => {
        res.send(data);
      }
    ).catch(error => {
      console.log(error);
    })
  }
}

module.exports = homeController;


