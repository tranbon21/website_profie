const http = require("http");
const fs = require("fs");
const path = require("path");

const defaultPort = Number(process.env.PORT || 3000);
const root = __dirname;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4"
};

function send(res, status, body, type) {
  res.writeHead(status, { "Content-Type": type });
  res.end(body);
}

let currentPort = defaultPort;

const server = http.createServer((req, res) => {
  const urlPath = req.url === "/" ? "/index.html" : req.url;
  const filePath = path.join(root, path.normalize(urlPath));

  if (!filePath.startsWith(root)) {
    send(res, 403, "Forbidden", "text/plain; charset=utf-8");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      send(res, 404, "Not Found", "text/plain; charset=utf-8");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const type = mimeTypes[ext] || "application/octet-stream";
    send(res, 200, data, type);
  });
});

function startServer(port) {
  currentPort = port;
  server.listen(port, () => {
    console.log(`Profile landing page is running at http://localhost:${port}`);
  });
}

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    const nextPort = currentPort + 1;
    console.log(`Port ${currentPort} is busy, trying http://localhost:${nextPort} ...`);
    setTimeout(() => {
      startServer(nextPort);
    }, 100);
    return;
  }

  throw error;
});

startServer(defaultPort);
