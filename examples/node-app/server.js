const express = require("express");
const app = express();
const PORT = 3000;

// Listen on all network interfaces
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("🚀 Hello from Node.js running inside Docker!");
});
