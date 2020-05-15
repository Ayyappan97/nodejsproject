var express=require("express");
var router=express.Router();

var passport=require("passport");
var user=require("../models/user");



router.get("/",function(req,res){
	res.render("test");	
})

// show register form
router.get("/register", function(req, res){
   res.render("auth/register"); 
});
//handle sign up logic
router.post("/register", function(req, res){
    var newuser = new user({username: req.body.username});
    user.register(newuser, req.body.password, function(err, user){
        if(err){
            req.flash("error",err.message);
            return res.redirect("/register");
        }
        passport.authenticate("local")(req, res, function(){
			req.flash("success","Succcessfully signed in as" +  user.username)
           res.redirect("/campgrounds"); 
        });
    });
});

// show login form
router.get("/login", function(req, res){
   res.render("auth/login"); 
});
// handling login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res){
});

// logic route
router.get("/logout", function(req, res){
   req.logout();
	req.flash("error","successfully Loged Out");
   res.redirect("/");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

module.exports=router;
