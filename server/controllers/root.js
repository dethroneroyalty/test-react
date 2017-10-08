const render = require("preact-render-to-string");
const html = require("../view/view").default;

module.exports = function Root(app) {
  return {
    index(req, resp, next) {
      html(req.url, resp.send.bind(resp)).catch(next);
    }
  };
};
