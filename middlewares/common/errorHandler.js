const createError = require("http-errors");
// 404 error handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Content Not found"));
}

// default error handler

function errorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
  res.status(err.status || 500);

  console.log(process.env.NODE_ENV);
  if (res.locals.html) {
    // html response
    res.locals.title = "Error Page";
    res.render("error");
  } else {
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
