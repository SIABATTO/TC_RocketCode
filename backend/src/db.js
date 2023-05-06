const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    await connect('mongodb+srv://asiabatto05:admin@cluster0.z0zfzng.mongodb.net/?retryWrites=true&w=majority')
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {connectDB}