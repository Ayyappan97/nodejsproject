
var express=require("express");
var router=express.Router();
var camp=require("../models/camp")
var middleware=require("../middleware")

router.get("/campgrounds",middleware.isLoggedIn,function(req,res){
	camp.find({},function(err,camps){
		if(err){
			console.log("error");
		}else{
			res.render("campground/camp",{camp:camps,currentUser:req.user});
		}
		
	});
			  
	
});

router.post("/campgrounds",function(req,res){
	
	var name = req.body.name;
	var img=req.body.img;
	var discription=req.body.discription;
	var author={
		id:req.user._id,
		username:req.user.username
	};	
	var newcampground={name :name,img: img,discription:discription,author:author};
	camp.create(newcampground,function(err,newcreated){
		if(err){
			console.log(err)
		}else{
      res.redirect("/campgrounds");
		}
	});
			 
});

router.get("/newcamp",middleware.isLoggedIn,function(req,res){
	res.render("campground/new");
});

router.get("/shownew/:id",function(req,res){
	camp.findById(req.params.id).populate("comments").exec(function(err,found){
		if(err){
			console.log("err");
		}else{
			res.render("campground/show",{campaign:found});
		}
	});
});

router.get("/shownew/:id/edit",middleware.isuserchecked,function(req, res){
	if(req.isAuthenticated()){
	     camp.findById(req.params.id, function(err, found){
	        res.render("campground/edit", {campaign: found}); 
    });
	}
});

// UPDATE CAMPGROUND ROUTE
router.put("/shownew/:id",middleware.isuserchecked,function(req, res){
    // find and update the correct campground
    camp.findByIdAndUpdate(req.params.id, req.body.campaign, function(err, updatedCampground){
       if(err){
           res.redirect("/campgrounds");
       } else {
           //redirect somewhere(show page)
		 
           res.redirect("/shownew/" + req.params.id);
       }
    });
});

router.delete("/shownew/:id",middleware.isuserchecked,function(req,res){
	camp.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/campgrounds");
		}else{
			res.redirect("/campgrounds");
		}
	})
});




module.exports=router;



