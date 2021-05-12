const mongoose = require('mongoose')
module.exports = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    console.log('Connected to DB')
  } catch (err) {
    console.log('failed to connect')
    console.log(err)
  }
}
