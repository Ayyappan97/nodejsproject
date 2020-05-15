var mongoose=require("mongoose");

var camp=require("./models/camp");
var data=[{
	name:"Mclaren",
	img: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
	discription:"The McLaren P1 is a limited-production plug-in hybrid sports car produced by British automobile manufacturer McLaren Automotive. ... It is considered by the automotive press to be the successor to the F1, utilising hybrid power and Formula 1 technology, but does not have the same three-seat layout"
},
   {	
	name:"MOUNT EVEREST",
	img: "https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
	discription:"Mount Everest attracts many climbers, some of them highly experienced mountaineers. There are two main climbing routes, one approaching the summit from the southeast in Nepal (known as the standard route and the other from the north in Tibet. While not posing substantial technical climbing challenges on the standard route, Everest presents dangers such as altitude sickness, weather, and wind, as well as significant hazards from avalanches and the Khumbu Icefall. As of 2019, over 300 people have died on Everest,[7] many of whose bodies remain on the mountain.[8]"
	 },
	{
		name:"FALLS", 
		img:"https://images.unsplash.com/photo-1518715179561-57faf0b9fd37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
		discription:"Waterfalls are commonly formed in the upper course of a river where lakes fall into in steep mountains.[1] Because of their landscape position, many waterfalls occur over bedrock fed by little contributing area, so they may be ephemeral and flow only during rainstorms or significant snowmelt. The further downstream, the more perennial a waterfall can be. Waterfalls can have a wide range of widths and depths."
		},
		  {
			  name:"BEAR",
			  img:"https://images.unsplash.com/photo-1457140072488-87e5ffde2d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
			  discription:"Bears are carnivoran mammals of the family Ursidae. They are classified as caniforms, or doglike carnivorans. Although only eight species of bears are extant, they are widespread, appearing in a wide variety of habitats throughout the Northern Hemisphere and partially in the Southern Hemisphere",
		  },
		  {
			  name:"Elephants",
			  img:"https://images.unsplash.com/photo-1517486430290-35657bdcef51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
			  discription:"Elephants are mammals of the family Elephantidae and the largest existing land animals. Three species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. Elephantidae is the only surviving family of the order Proboscidea; extinct members include the mastodons."
		  },
		  {
			  name:"TEXTURES",
			  img:"https://images.unsplash.com/photo-1487746499354-6ec9a4cf4e2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
			  discription:"In the visual arts, texture is the perceived surface quality of a work of art. It is an element of two-dimensional and three-dimensional designs and is distinguished by its perceived visual and physical properties. Use of texture, along with other elements of design, can convey a variety of messages and emotions"
		  },
		   {
			  name:"TRAVEL",
			  img:"https://images.unsplash.com/photo-1560251180-1a0b93970379?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
			  discription:"Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip."
		  },
		   {
			  name:"PIZZA",
			  img:"https://images.unsplash.com/photo-1559160582-eab6966b680f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
			  discription:"Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta"
		  }
]
function seedDB(){
	camp.deleteMany({},function(err,removed){
	if(err){
		console.log("err")
	}else{
		data.forEach(function(seed){
			camp.create(seed,function(err,camp){
	if(err){
		console.log(err)
	}else{
		console.log("its created")
		comment.create({
			text:"wow! Its a Nice Click",
			author:"Ayyappan",
		},function(err,comment){
			if(err){
				console.log("err");
			}else{
				camp.comments.push(comment);
				camp.save();
				console.log("new one saved");
			}
		})
		}
});
		});
		

	}
});
}


module.exports=seedDB;