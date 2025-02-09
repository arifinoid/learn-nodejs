const http = require("http");
const url = require("url");

const handler = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  res.setHeader("x-server-date", new Date());

  if (parsedUrl.pathname === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write("Hello from web server!");
    return res.end();
  } else if (parsedUrl.pathname === "/time") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write(new Date().toString());
    return res.end();
  } else if (parsedUrl.pathname === "/hello") {
    const name = parsedUrl.query.name;

    if (!name) {
      res.writeHead(404, { "Content-type": "text/plain" });
      return res.end();
    }

    res.writeHead(200, { "Content-type": "text/plain" });
    res.write(`Hello ${name}`);
    return res.end();
  } else if (parsedUrl.pathname.startsWith("/user/")) {
    const regex = new RegExp("/user/(.+)");
    const matches = regex.exec(parsedUrl.pathname);

    if (!matches || !matches[1]) {
      res.writeHead(404, { "Content-type": "text/plain" });
      return res.end();
    }

    res.writeHead(200, { "Content-type": "text/plain" });
    res.write(`Userprofile of ${matches[1]}`);
    return res.end();
  } else {
    res.writeHead(404, { "Content-type": "text/plain" });
    return res.end();
  }
};

const server = http.createServer(handler);

server.listen(3000, () => console.log("server running ..."));
