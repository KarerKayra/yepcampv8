var express = require("express");
var Campground = require("../models/campground");
var router  = express.Router();




router.get("/", function(req, res) {

  Campground.find({}, function(err, allCampgrounds) {
      if(err){
        console.log(err);
      } else {
        res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
      }
  });

});

router.post("/", function(req, res) {
  // res.send("you hit the post route");
  //get data form and add to campgrounds array
  var name   = req.body.name;
  var image  = req.body.image;
  var desc   = req.body.description;
  var newCampground = {name: name, image: image, description:desc }
  // CREATE NEW CAMPGROUND
Campground.create(newCampground, function(err, newlyCreated) {
      if(err){
        console.log(err);
      } else {

        //redirect back to campgrounds page
        res.redirect("/campgrounds");
      }
});

});

router.get("/new", function(req, res) {
  res.render("campgrounds/new");
});

//Show -- Shows more info about one campground
router.get("/:id",function(req, res) {
  //find campground with provided ID
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
          if(err){
            console.log(err);
          } else {
            console.log(foundCampground);
        //render show template with campground
           res.render("campgrounds/show.ejs",{campground: foundCampground});

         }
      });
    })

    module.exports = router;
