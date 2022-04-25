const mongoose = require('mongoose')

const mongoUri =
  'mongodb+srv://seifeddine:seifeddine123@angularauth.hwx1i.mongodb.net/AngularAuth?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = connectDB
