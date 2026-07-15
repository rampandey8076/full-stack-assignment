const express = require("express");
const router = express.Router();

const auditWrite = require("../middleware/auditWrite");

router.get("/", getPosts);

router.post("/", auditWrite, createPost);

module.exports = router;