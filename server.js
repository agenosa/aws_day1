const express = require("express");
const app = express();

app.use(express.json())

app.use(express.static("build"))
const cars = ['acura', 'honda', 'nissan']


app.get("/api/cars", (req, res) => {
  res.send(cars)
});

app.post("/api/cars", (req, res) => {
  const data = req.body
  cars.push(data)
  res.send(data)

})

app.get('*', (req, res) => {
  res.sendFile('build/index.html')});

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))