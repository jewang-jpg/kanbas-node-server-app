export default function HelloRoutes(app) {
  app.get("/hello", (req, res) => {
    res.send("Hello World!");
  });
  app.get("/", (req, res) => {
    res.send("welcome server");
  });
}