let express = require('express');
let router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
    let x;
    let param = req.query.x;
    if (param) {
        x = param
    } else {
        x = Math.ceil(Math.random() * 100)
    }

    res.send(`Math.log() applied to ${x} is ${Math.log(x)}`);
});

module.exports = router;
