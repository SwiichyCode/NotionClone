const controller = require("../controllers/board.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/dashboard/all/:_id", controller.getBoards);
  app.post("/api/dashboard/add", controller.addBoard);
  app.delete("/api/dashboard/delete/:id", controller.deleteBoard);
};
