var express = require('express');
var router = express.Router();
const ctrlFood = require('../controllers/food');


/* GET home page. */
router.get('/', ctrlFood.foodlist);

/* GET foodList page. */
router.get('/foods/:foodid', ctrlFood.foodInfo);

router.route('/new').get(ctrlFood.addNewFood).post(ctrlFood.doAddNewFood);


module.exports = router;
