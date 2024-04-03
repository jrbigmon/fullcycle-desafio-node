const HomeHtml = require("../view/home.view");

function HomeService() {
  this.home = function (_, res) {
    try {
      return res.status(200).send(new HomeHtml().html);
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        success: false,
      });
    }
  };
}

module.exports = HomeService;
