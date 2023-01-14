const { Router } = require("express");
const {
  putNft,
  getNft
} = require("./controllers");

const router = Router();

router.put("/", putNft);
router.get("/", getNft);

module.exports = router;
