const mongoose = require('mongoose');

// const uri = ''

const Options = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}

const connectDB = (uri) =>{
    // console.log('i am db');
    mongoose.connect(uri,Options)
};
mongoose.set('strictQuery', false);

module.exports = connectDB;
