/* Get home page */
const foodList = function(req, res){
    res.render('foodList', {title: 'Food List'});
};

const myFavourteFood = function(req, res){
    res.render('myFavourite-food', {title: 'My Favourte Food'});
};

module.exports = {
    foodList,
    myFavourteFood
};  