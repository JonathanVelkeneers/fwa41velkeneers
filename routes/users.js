let express = require('express');
let router = express.Router();
let value = 0;

/* GET users listing. */
router.get('/', function (req, res, next) {
    value++;
    res.send(`User accesses are: ${value}`);
});

module.exports = router;
