var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/data", function (req, res, next) {
  // Первым аргументом название шаблона, вторым обект который будет доступен из шаблона
  res.render("gena", { text: "Hello Gena! :)" });
});

module.exports = router;
