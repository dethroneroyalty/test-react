import React from "react";
import render from "react-dom/server";
import { StaticRouter as Router } from "react-router-dom";

import App from "../../src/App.js";
import routes from "../../src/routes.js";

export default async function html(url) {
  const Component = routes.find(({ path }) => path === url).component;
  let data = await Component.requestInitialData();

  let html = render(
    <div id="root">
      <Router location={url} context={data}>
        <App />
      </Router>
    </div>
  );

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>App</title>
        <script defer src="/client.js"></script>
        <script>
          window.__initialData__ = ${serialize(data)}
        </script>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `);
}
