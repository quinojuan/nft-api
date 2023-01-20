const { Router } = require("express");
const { putNft, getNft, welcome, deleteImage } = require("./controllers");

const router = Router();

router.put("/", putNft);
router.get("/:id", getNft);
router.delete("/:public_id", deleteImage)

module.exports = router;
