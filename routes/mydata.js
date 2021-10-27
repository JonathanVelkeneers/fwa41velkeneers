let express = require('express');
let router = express.Router();

/* GET mydata page. */
router.get('/', function (req, res, next) {
    res.render('mydata', {title: 'Jonathan Velkeneers'});
});

module.exports = router;
