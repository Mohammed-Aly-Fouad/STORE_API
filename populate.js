import dns from 'dns';
// Set the DNS servers to Google's globally for this Node process
dns.setServers(['8.8.8.8', '8.8.4.4']);
console.log('DNS servers enforced: 8.8.8.8');

import 'dotenv/config';
import connectDB from './db/connect.js';
import Product from './models/product.js';
import jsonProducts from './products.json' with { type: 'json' };
import two_hundred_products from './two_hundred_products.json' with {type: 'json'};


console.log(Array.isArray(jsonProducts)); // Output: true (Success!)
const start = async () => {
    try {
        // 1. Connect to the database
        await connectDB(process.env.MONGO_URI);
        console.log('Connected to MongoDB...');

        // 2. Clear out current data (Prevents duplicates if you run this twice)
        await Product.deleteMany();
        console.log('Cleared existing products...');

        // 3. Create all products from JSON
        await Product.create(jsonProducts);
        await Product.create(two_hundred_products);
        console.log('Successfully uploaded JSON data!');

        // 4. Terminate the script (Crucial: otherwise the DB connection stays open)
        process.exit(0);
    } catch (error) {
        console.error('Error populating database:', error);
        process.exit(1);
    }
};

start();