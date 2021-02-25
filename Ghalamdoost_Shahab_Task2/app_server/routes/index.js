var express = require('express');
var router = express.Router();
const ctrMain = require('../controllers/main');
const ctrlFood = require('../controllers/food');


/* GET home page. */
router.get('/', ctrMain.index);

/* GET foodList page. */
router.get('/foodlist', ctrlFood.foodList);

/* GET myFavouriteFood page. */
router.get('/myfavourtefood', ctrlFood.myFavourteFood);

module.exports = router;
