const express = require('express')

const app = express()
const PORT = 8080

app.get('/health', (req, res) => {
  res.json({
    ok: 'health is okay!'
  })
})

app.listen(PORT, () => {
  console.log('Server is running on PORT...', PORT)
})