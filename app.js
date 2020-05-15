var express = require("express"),
    app =express(),  
    bodyParser=require("body-parser"),   
    mongoose =require("mongoose"),
    flash=require("connect-flash"),
    passport=require("passport"),        
    LocalStrategy=require("passport-local"),
    methodoverride=require("method-override"),
    camp=require("./models/camp"),
    comment=require("./models/comment"),
    user=require("./models/user"),
    seedDB=require("./seed")

var campgroundRoutes=require("./routes/campground"),
      commentRoutes=require("./routes/comment"),
       authRoutes=require("./routes/index")
   
mongoose.connect("mongodb://localhost:27017/gallery-1", {useNewUrlParser: true, useUnifiedTopology: true}); 
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodoverride("_method"));
//seedDB();

//passport config

app.use(require("express-session")({
		secret:"the car gallery",
		resave:false,
	    saveUninitialized:false
}));
app.use(flash()),
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
	res.locals.error=req.flash("error");
	res.locals.success=req.flash("success");
   next();
});

app.use(campgroundRoutes);
app.use(commentRoutes);
app.use(authRoutes);





app.listen(3000,function(){
	console.log("heyy! yelcamp server started ");
});