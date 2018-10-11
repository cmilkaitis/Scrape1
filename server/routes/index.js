const stocksController = require("../controllers").stocks;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the stocks API!"
    })
  );

  app.get("/api/stocks", stocksController.list);
};
