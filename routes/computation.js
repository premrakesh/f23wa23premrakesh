var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

  var queryX = parseFloat(req.query.x);

  if (!isNaN(queryX)) {
    if (queryX >= -1 && queryX <= 1) {
      const atan2Result = Math.atan2(queryX, 0); // You need two arguments for Math.atan2
      const atanhResult = Math.atanh(queryX);
      const cbrtResult = Math.cbrt(queryX);

      const response = `
        atan2() applied to ${queryX} is ${atan2Result}<br>
        atanh() applied to ${queryX} is ${atanhResult}<br>
        cbrt() applied to ${queryX} is ${cbrtResult}<br>
      `;
      res.send(response);
    } else {
      res.send("Input value for atanh() is out of range.");
    }
  } else {
    const randomX = Math.random() * 2 - 1; // Generate a random value between -1 and 1

    const atan2Result = Math.atan2(randomX, 0); // You need two arguments for Math.atan2
    const atanhResult = Math.atanh(randomX);
    const cbrtResult = Math.cbrt(randomX);

    const response = `
      atan2() applied to ${randomX} is ${atan2Result}<br>
      atanh() applied to ${randomX} is ${atanhResult}<br>
      cbrt() applied to ${randomX} is ${cbrtResult}<br>
    `;
    res.send(response);
  }
});

module.exports = router;
