const stock = require("../models").stock;

module.exports = {
  list(req, res) {
    return stock
      .all()
      .then(stocks => res.status(200).send(stocks))
      .catch(error => res.status(400).send(error));
  }
};
