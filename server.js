const express = require("express");
const app = express();

app.use(express.json())

const cars = [
  {
    id: 1,
    make: 'acura',
    model: "nsx",
    color: 'blue',
  },
  {
    id: 2,
    make: 'honda',
    model: "civic",
    color: 'green',
  }
]

app.get("/api/cars", (req, res) => {
  res.send(cars)
});

app.post("/api/cars", (req, res) => {
  const data = req.body
  data.id = cars.length+1
  cars.push(data)
  res.send(data)
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))