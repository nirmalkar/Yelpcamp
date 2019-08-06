var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name:String,
    image:String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campgrounds.create({ name: "Mussoorie", image: "https://images.unsplash.com/photo-1519395612667-3b754d7b9086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" }, function(err, campground){
//  if(err){
//      console.log("Something wrong, Err!!");
//      console.log(err);
//  } else{
//      console.log("Newly created Campground");
//      console.log(campground);
//  }   
// });



app.get("/",function(req, res){
    res.render("landing"); 
});
app.get("/campgrounds", function(req, res){
    //get all campgrounds from db
    Campground.find({},function(err,allCampgrounds){
        if(err){
            console.log(err);
        } else{
            res.render("campgrounds", { campgrounds: allCampgrounds });
        }
    });


});

app.post("/campgrounds",function(req , res){
    //take data from form and add it to the campground  array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image} 
    //create a newcampground and save it to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campgrounds");
        }
    });
    //redirect back to the campground page 
    
});

app.get("/campgrounds/new", function(req, res){
res.render("new.ejs")
});

app.listen(3000, function(){
    console.log("The Yelpcmap server has started");
});