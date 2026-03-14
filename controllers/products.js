 
 import Product from  '../models/product.js'

 // just for testing
 const getAllProductsStatic = async (req, res) => {
    const search = 'uto';
    const products = await Product.find({
        name : {$regex: search, $options: 'i'}
    });
    res.status(200).json({nbHits: products.length, products});
};

 const getAllProducts = async (req, res) => {

    const {featured, company, name} = req.query;

    const queryObject =  {};
    
        if (featured) {
            queryObject.featured  = featured === 'true' ? true : false;
            console.log(queryObject)
        }
        
        if (company) {
            queryObject.company = company;
        }

        if (name) {
            queryObject.name = {$regex: name, $options: 'i'}
        }
        
    console.log(queryObject)

    const products = await Product.find(queryObject);

    res.status(200).json({nbHits: products.length, products});
    

};

export {
    getAllProductsStatic,
    getAllProducts
}