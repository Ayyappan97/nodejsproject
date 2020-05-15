var camp=require("../models/camp");
var comment=require("../models/comment");

var middleware={};
middleware.isLoggedIn=function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
	req.flash("success","LOGIN TO EXPLORE");
    res.redirect("/login");
};

middleware.isuserchecked=function isuserchecked(req,res,next){
	if(req.isAuthenticated()){
		  camp.findById(req.params.id, function(err, found){
			  if(err){
				  res.redirect("back");
			  }else{
				  if(found.author.id.equals(req.user._id))
				    {
					   next();
					 }else{
						 res.redirect("back");
					 }
			       }      
		  });
	}else{
		res.redirect("back");
	}
}
middleware.iscommentuserchecked = function iscommentuserchecked(req,res,next){
	if(req.isAuthenticated()){
		  comment.findById(req.params.comments_id, function(err, found){
			  if(err){
				  res.redirect("back");
			  }else{
				  if(found.author.id.equals(req.user._id))
				    {
					   next();
					 }else{
						 res.redirect("back");
					 }
			       }      
		  });
	}else{
		res.redirect("back");
	} 
}
module.exports=middleware;