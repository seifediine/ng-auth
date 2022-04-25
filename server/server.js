const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

connectDB()

const PORT = 5000

const api = require('./routes/api')

const app = express()
app.use(cors())

// Testing Route
app.get('/', (req, res) => {
  res.send('API is running')
})

// BodyParser middleware
app.use(express.json())

// Routes
app.use('/api', api)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
