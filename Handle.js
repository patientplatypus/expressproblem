
const ERRORS = {
  noCode: {
    status: 400,
    error: "No code provided"
  },
  internal: {
    status: 500,
    error: "An internal error has occurred"
  }
};

let express     = require('express');
var router      = express.Router();

router.post('/',(req, res, next) => {
    console.log('inside handle controller!');
    if (!req.body.code) {
      return response
        .status(ERRORS.noCode.status)
        .json(ERRORS.noCode)
        .end();
    }

    options = {
      code: req.body.code,
      timeoutMs: 2000,
      v3: (req.body.v3 == true || req.body.v3 == "true")
    }

    sandbox.run(options, function (err, result) {

      if (err) {
        return response
          .status(ERRORS.internal.status)
          .json(ERRORS.internal)
          .end();
      }

      response
        .status(200)
        .json(result)
        .end();
    })
  }
)

module.exports = router;
