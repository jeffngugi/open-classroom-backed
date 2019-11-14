const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const stuffCtrl = require("../controllers/stuff");
const multer = require("../middleware/multer-config");

router.get("/", auth, stuffCtrl.getAllStuff);
router.post("/", auth, multer, stuffCtrl.createThing);
router.get("/:id", auth, stuffCtrl.getOneThing);
router.put("/:id", auth, multer, stuffCtrl.modifyThing);
router.delete("/:id", auth, stuffCtrl.deleteThing);

module.exports = router;
