const { Router } = require("express");
const {
  putNft,
  getNft,
  welcome
} = require("./controllers");

const router = Router();

router.get("/", welcome)
router.put("/", putNft);
router.get("/", getNft);

module.exports = router;
