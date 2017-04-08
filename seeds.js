var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
  {
    name  :"Cloud Rest",
    image :"/images/foto1.png",
    description: "Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. Lorem Ipsum har tålt tidens tann usedvanlig godt, og har i tillegg til å bestå gjennom fem århundrer også tålt spranget over til elektronisk typografi uten vesentlige endringer. Lorem Ipsum ble gjort allment kjent i 1960-årene ved lanseringen av Letraset-ark med avsnitt fra Lorem Ipsum, og senere med sideombrekkingsprogrammet Aldus PageMaker som tok i bruk nettopp Lorem Ipsum for dummytekst."
  },
  {
    name  :"Desert Mesa",
    image :"/images/foto2.png",
    description: "Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. Lorem Ipsum har tålt tidens tann usedvanlig godt, og har i tillegg til å bestå gjennom fem århundrer også tålt spranget over til elektronisk typografi uten vesentlige endringer. Lorem Ipsum ble gjort allment kjent i 1960-årene ved lanseringen av Letraset-ark med avsnitt fra Lorem Ipsum, og senere med sideombrekkingsprogrammet Aldus PageMaker som tok i bruk nettopp Lorem Ipsum for dummytekst."
  },
  {
    name  :"Nice Rest",
    image :"/images/foto3.png",
    description: "Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. Lorem Ipsum har tålt tidens tann usedvanlig godt, og har i tillegg til å bestå gjennom fem århundrer også tålt spranget over til elektronisk typografi uten vesentlige endringer. Lorem Ipsum ble gjort allment kjent i 1960-årene ved lanseringen av Letraset-ark med avsnitt fra Lorem Ipsum, og senere med sideombrekkingsprogrammet Aldus PageMaker som tok i bruk nettopp Lorem Ipsum for dummytekst."
  },

]

function seedDB(){
  // Remove allCampgrounds
  Campground.remove({}, function(err){
        if(err){
          console.log(err);
        }
        console.log("removed campgrounds!");
        // add a few campgrounds
    data.forEach(function(seed) {
        Campground.create(seed, function(err, campground){
            if(err){
              console.log(err)
            } else {
              console.log("added campground");
              // create a comments
              Comment.create(
                {
                  text : "This place is great, but no internet",
                  author: "Homer",
                }, function(err, comment) {
                      if(err){
                        console.log(err);
                    } else {
                      campground.comments.push(comment);
                      campground.save();
                      console.log("created new comment");
                    }

                });
            }

        })
    });

      });


      //add a few comments
}

module.exports = seedDB;
