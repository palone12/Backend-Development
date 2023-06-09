const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Yype", "text/html");
  res.end("<h1>Hello I am apsiring backend Developer</h1>");
});

server.listen(3000, () => {
  console.log("Wooh ho I am Listening your talks");
});
