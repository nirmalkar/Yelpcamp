var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

app.get("/",function(req, res){
    res.render("landing"); 
});
app.get("/campgrounds", function(req, res){
var campgrounds = [
{name:"Rishikesh",image:"https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732b7cd5964dc25d_340.jpg"},
{name:"Spiti Valley",image:"https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732b7cd5964dc25d_340.jpg"},
{name:"Jaisalmer",image:"https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732b7cd5964dc25d_340.jpg"},
{name:"Mussoorie",image:"https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732b7cd5964dc25d_340.jpg"}
];
res.render("campgrounds",{campgrounds:campgrounds});
});

app.get("/campgrounds/new", function(req, res){
res.render("new.ejs")
});

app.listen(3000, function(){
    console.log("The Yelpcmap server has started");
});