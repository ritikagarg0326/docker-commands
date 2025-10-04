const express = require("express");
const app = express();
const PORT = 4000; // must match docker -p port mapping

app.use(express.static("public")); // serve static files

app.listen(PORT, "0.0.0.0", () => {
  //console.log(`Server running at http://localhost:${PORT}`);
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
