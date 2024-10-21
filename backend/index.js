import express from "express";
import loginRoute from "./routes/login.js";

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/login", loginRoute);

app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
});