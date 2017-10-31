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

module.exports = (sandbox) => (request, response) => {

  console.log('INSIDE HANDLER');
  console.log('value of sandbox: ', sandbox);
  console.log('value of request.body: ', request.body);

  if (!request.body.code) {
    return response
      .status(ERRORS.noCode.status)
      .json(ERRORS.noCode)
      .end();
  }

  options = {
    code: request.body.code,
    timeoutMs: 2000,
    v3: (request.body.v3 == false || request.body.v3 == "false")
  }

  sandbox.run(options, function (err, result) {

    console.log('inside sandbox run');
    console.log('value of err: ', err);
    console.log('value of result: ', result);


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
};
