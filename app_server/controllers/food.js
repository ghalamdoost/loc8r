const foodArray=[
    {name:"Oatmeal", type:"Breakfast"},
    {name:"Steak", type:"Lunch"},
    {name:"Salad", type:"Dinner"}
]

const myFavFood="Steak";


/* Get home page */
const foodList = function(req, res){
    res.render('foodlist', {title: 'Food List', foods:foodArray});
};

const myFavourteFood = function(req, res){
    res.render('myfavourite-food', {title: 'My Favourte Food', food:myFavFood});
};



module.exports = {
    foodList,
    myFavourteFood
};  