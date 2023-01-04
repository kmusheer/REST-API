const product = require('../models/product')

const getAllProducts = async (req, res) =>{

    const { company, name, feature, sort, select } =  req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;              //company=samsung  tking req.query and repalce other data
    }

    if(feature){
        queryObject.feature = feature;
    }

    if(name){
        queryObject.name = { $regex: name, $options : "i"};         // REGEX i means no uppercase&lowercase matter
    }

    let apiData = product.find(queryObject);


    if(sort){
        let fixSorting = sort.split(",").join(" ");            //sort=-name "OR" sort=name,price "ASC",   sort=name,-price "DESC"
        apiData = apiData.sort(fixSorting);
    }

    if(select){
        let fixSorting = select.split(",").join(" ");          //select=name,company 
        apiData = apiData.select(fixSorting);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    console.log(queryObject)
    
    const Products = await apiData;
    res.status(200).json({Products, nbHits : Products.length});
};


const getAllProductsTesting = async (req, res) =>{
    console.log(req.query);
    const Products = await product.find(req.query)
    res.status(200).json(Products);
};

module.exports = {getAllProducts, getAllProductsTesting};