
var mongoose=require("mongoose");

var carSchema=new mongoose.Schema({
	name:String,
	img:String,
	discription:String,
	author:{
		id: {
		     type:mongoose.Schema.Types.ObjectId,
		      ref:"user"
		},
		username:String,
	},
	comments:[{
		   type:mongoose.Schema.Types.ObjectId,
		    ref:"comment"
	}]
});

module.exports=mongoose.model("camp",carSchema);
