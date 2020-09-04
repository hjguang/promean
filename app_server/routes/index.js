var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main')
var ctrlLocation = require('../controllers/locations')
var ctrlOther = require('../controllers/other')

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
router.get("/", ctrlLocation.homelist);
router.get("/location", ctrlLocation.locationInfo);
router.get("/location/review/new", ctrlLocation.addReview);

router.get('/about', ctrlOther.about);
module.exports = router;
