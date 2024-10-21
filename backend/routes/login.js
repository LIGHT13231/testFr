import express from "express";
const router = express.Router();

router.post("/", async (req, res, next) => {
  const { email, password } = req.body;

  return res.status(200).json({ message: "Login successful" });
});

export default router;
