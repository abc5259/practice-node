const http = require("http");
const fs = require("fs").promises;

const server = http
  .createServer(async (req, res) => {
    try {
      const data = await fs.readFile("./index.html");
      res.end(data);
    } catch (error) {
      console.error(error);
    }
  })
  .listen(9090);

server.on("listening", () => {
  console.log("9090번 포트에서 서버대기중");
});

server.on("error", error => {
  console.console.error(error);
});
