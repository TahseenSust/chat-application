const User = require("../models/People");
const bcrypt = require("bcrypt");

function getLogin(req, res, next) {
  res.render("index");
}

async function login(req, res, next) {
  try {
    const user = await User.findOne({
      $or: [{ email: req.body.username }, { mobile: req.body.username }],
    });

    if (user && user._id) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
    }
  } catch (err) {}
}

module.exports = {
  getLogin,
};
