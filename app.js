var express = require("express");
var app =express();
 
var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

var camp =[
	{name:"Mustang",img:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
	  {name:"Lamborghini",img:"https://images.unsplash.com/photo-1514316703755-dca7d7d9d882?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"},
	{name:"FORD",img:"https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"},
	{name:"BUGGATI",img:"https://cdn.carbuzz.com/gallery-images/840x560/455000/0/455027.jpg"},
	{name:"FERRARI",img:"https://stimg2.cardekho.com/images/carNewsimages/userimages/20572/Ferrari.jpg?tr=w-360?tr=w-300"},
	  {name:"ROLLS ROYCE",img:"https://image.cnbcfm.com/api/v1/image/106323013-1578339927426p90373188_rolls-royce-phantom.jpg?v=1578339984"},
	{name:"BMW",img:"https://i0.wp.com/asiatimes.com/wp-content/uploads/2020/03/BMW.png?fit=1020%2C612&ssl=1"},
	{name:"RED COUPE",img:"https://images.unsplash.com/photo-1510883056135-32472f0e11b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"}
			  ]	


app.get("/",function(req,res){
	res.render("test");
	
})

app.get("/campgrounds",function(req,res){
	
	res.render("camp",{camp:camp});
})

app.post("/campgrounds",function(req,res){
	
	var name = req.body.name;
	var img=req.body.img;
	var newcampground={name :name,img: img};
	camp.push(newcampground);
			  res.redirect("/campgrounds");
})

app.get("/newcamp",function(req,res){
	res.render("new");
})


app.listen(3000,function(){
	console.log("heyy! yelcamp server started ");
})