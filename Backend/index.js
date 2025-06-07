const express=require("express");
const app = express();
const PORT = 3000;

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
app.get("/",(req,res)=>{
    res.send("<h1>Hello..Check your number by hitting url /is-prime/:number</h1>");
})
app.get("/is-prime/:number", (req, res) => {
  const number = parseInt(req.params.number);
  if (isNaN(number)) {
    return res.status(400).json({ error: "Invalid number" });
  }

  const result = isPrime(number);
  res.json({ number, isPrime: result });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
