const { PrismaClient } = require('@prisma/client');
const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());


const prisma = new PrismaClient();
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/adminLogin', (req, res) => {
  const {email, pass} = req.body;

  if(process.env.EMAIL === email && process.env.PASS === pass) {
    res.status(200).send({success: true})
  } else {
    res.status(200).send({success: false})
  }
})

app.post('/save', (req, res) => {

  // await prisma.feedback.create()
  console.log('I was called')
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})