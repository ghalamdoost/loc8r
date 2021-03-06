var express = require('express');
var router = express.Router();
const ctrMain = require('../controllers/main');
const ctrlFood = require('../controllers/food');


/* GET home page. */
router.get('/', ctrMain.index);

/* GET foodList page. */
router.get('/list', ctrlFood.foodList);

/* GET myFavouriteFood page. */
router.get('/favourite', ctrlFood.myFavourteFood);

module.exports = router;
