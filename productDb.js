require('dotenv').config()
const connectDB = require('./db/connect');
const products = require('./models/product');

const productJSON = require('./product.json')


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await products.deleteMany()
        await products.create(productJSON);
        console.log("succes")
    } catch (error) {
        console.log(error)
    }
}   

start();