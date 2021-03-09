var express = require('express');
var router = express.Router();
const ctrlFood = require('../controllers/food');


/* GET home page. */
router.get('/', ctrlFood.foodlist);

/* GET foodList page. */
router.get('/foods/:foodid', ctrlFood.foodInfo);


module.exports = router;
