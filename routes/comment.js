
var express=require("express");
var router=express.Router();
var camp=require("../models/camp");
var comment=require("../models/comment");
var middleware=require("../middleware");

router.get("/shownew/:id/comments/new",function(req,res){
	camp.findById(req.params.id,function(err,camp){
		if(err){
			console.log("err")
		}else{
			res.render("comment/new",{campaign:camp})
		}
	});
});

router.post("/shownew/:id/comments",function(req,res){
  camp.findById(req.params.id,function(err,camp){
	  if(err){
		  console.log("err");
	  }else{
	  comment.create(req.body.comment,function(err,comment){
		  if(err){
			  console.log(err);
		  }else{
			  comment.author.id=req.user._id;
			  comment.author.username=req.user.username;
			  comment.save();
			  camp.comments.push(comment);
			  camp.save();
			  req.flash("success","successfully added comment");
			  res.redirect("/shownew/" + camp._id);
		  }
	  })
	  }
  })
});
router.get("/shownew/:id/comments/:comments_id/edit",middleware.iscommentuserchecked,function(req,res){
	comment.findById(req.params.comments_id,function(err,found){
		if(err){
			res.redirect("/shownew/:id/comments/new");
		}else{
			res.render("comment/edit",{campaign_id:req.params.id,comment:found});
		}
	})	
});

router.put("/shownew/:id/comments/:comments_id",middleware.iscommentuserchecked,function(req,res){
	comment.findByIdAndUpdate(req.params.comments_id,req.body.comment,function(err,updatedcomment){
		if(err){
			res.redirect("back");
		}else{
			res.redirect("/shownew/" + req.params.id);
		}
	})
});
router.delete("/shownew/:id/comments/:comments_id/delete",middleware.iscommentuserchecked,function(req,res){
	comment.findByIdAndRemove(req.params.comments_id,function(err){
		if(err){
			res.redirect("back");
		}else{
			req.flash("error","successfully comment deleted")
			res.redirect("/shownew/" + req.params.id);
		}
	})
})


module.exports=router;
