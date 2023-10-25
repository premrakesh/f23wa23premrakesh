var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

  var queryX = parseFloat(req.query.x);

  if (!isNaN(queryX)) {
    const hypotResult = Math.hypot(queryX);
    const ceilResult = Math.ceil(queryX);
    const clz32Result = Math.clz32(queryX);

    const response = `
      hypot() applied to ${queryX} is ${hypotResult}<br>
      ceil() applied to ${queryX} is ${ceilResult}<br>
      clz32() applied to ${queryX} is ${clz32Result}<br>
    `;
    res.send(response);
  }
  else{
  const randomX = Math.random() * 100;

  const hypotResult = Math.hypot(randomX);
  const ceilResult = Math.ceil(randomX);
  const clz32Result = Math.clz32(randomX);

  const response = `
    hypot() applied to ${randomX} is ${hypotResult}<br>
    ceil() applied to ${randomX} is ${ceilResult}<br>
    clz32() applied to ${randomX} is ${clz32Result}<br>
  `;
  res.send(response);
  }
});
module.exports = router;