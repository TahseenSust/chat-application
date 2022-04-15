// external imports
const express = require("express");

const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
  checkLogin,
  redirectLoggedIn,
} = require("../middlewares/common/checkLogin");

const router = express.Router();

// inbox page
router.get("/", decorateHtmlResponse("Inbox"), checkLogin, getInbox);

module.exports = router;
