import app from "./app.js";

const port = process.env.PORT || 8000

app.get("/ping", (req, res) => {
  res.send("pong")
})


app.listen(port, () => {
  console.log(`App listening on http://127.0.0.1:${port}`);
})