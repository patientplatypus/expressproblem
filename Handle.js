
let express     = require('express');
var router      = express.Router();

router.post('/',(req, res, next) => {
    console.log('inside handle controller!');
  }
)

module.exports = router;
