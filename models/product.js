const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required :[true, "Price must be provided"],          //second para in error msg
    },
    feature : {
        type : Boolean,
        default : false,
    },
    reating : {
        type : Number,
        default : 4.8
    },
    createdAt : {
        type : Date,
        default : Date.now,
    },
    company : {
        type : String,
        enum : {
        values : ["Apple","OnePlus", "MI", "Redmi", "Realme", "OPPO", "VIVO", "Samsung"],
            message : `{Value} is not supported`,
        },
    },
});

module.exports = mongoose.model("Product",productSchema)