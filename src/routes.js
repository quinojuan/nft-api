const { Router } = require("express");
const { putNft, getNft, welcome, deleteImage } = require("./controllers");

const router = Router();

router.get("/", welcome);
router.put("/", putNft);
router.get("/", getNft);
router.delete("/:public_id", deleteImage)

module.exports = router;
