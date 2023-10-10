const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/adminLogin", (req, res) => {
  const { email, pass } = req.body;

  if (process.env.EMAIL === email && process.env.PASS === pass) {
    res.status(200).send({ success: true });
  } else {
    res.status(200).send({ success: false });
  }
});

app.post("/feedbackSave", async (req, res) => {
  try {
    let dbRes = await prisma.feedback.create({ data: req.body });
    res.status(200).send({ success: true });
  } catch (e) {
    res.status(200).send({ success: false });
  }
});

app.get("/feebackList", async (req, res) => {
  try {
    let dbRes = await prisma.feedback.findMany({});
    console.log(dbRes);
    res.send({ success: true, list: dbRes });
  } catch (e) {
    res.send({ success: false, list: [], error: e });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
