var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user/user_list', {title: 'Users',
    users: [{
      userName:'a'
    },{
      userName:'b'
    }]
  })
});

module.exports = router;
