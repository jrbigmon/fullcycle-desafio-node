const HomeHtml = require("../view/home.view");

function HomeService(proxyPort) {
  this.home = function (_, res) {
    try {
      return res.status(200).send(new HomeHtml(proxyPort).html);
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        success: false,
      });
    }
  };
}

module.exports = HomeService;
