var express = require("express");
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var router  = express.Router({mergeParams:true});



router.get("/new", isLoggedIn, function(req, res){

  // find campground by id
  console.log(req.params.id);
  Campground.findById(req.params.id, function(err, campground){
        if(err) {
          console.log(err);
        } else  {
          res.render("comments/new", {campground: campground});
        }
  })

});
router.post("/", isLoggedIn, function(req, res){
  //look up campground using Id
  Campground.findById(req.params.id, function(err, campground){
       if(err) {
         console.log(err);
         res.redirect("/campgrounds");
       } else {
       Comment.create(req.body.comment, function(err,comment){
              if(err) {
                console.log(err);
              } else {
                //create new comments
                comment.author.id = req.user._id;
                comment.author.username = req.user.username;
                comment.save();
                campground.comments.push(comment);
                campground.save();
                console.log(comment);
                res.redirect('/campgrounds/' + campground._id);
              }
       });
       }
  });

});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
      return next();
    }
      res.redirect("/login");
}

module.exports = router;
