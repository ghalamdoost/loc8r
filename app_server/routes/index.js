var express = require('express');
var router = express.Router();
// const ctrMain = require('../controllers/main');
const ctrlFood = require('../controllers/food');


/* GET home page. */
router.get('/', ctrlFood.homelist);

/* GET foodList page. */
router.get('/foods/:foodid', ctrlFood.foodInfo);


module.exports = router;
