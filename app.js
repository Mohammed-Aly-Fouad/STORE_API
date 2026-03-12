import dns from 'dns';
// Set the DNS servers to Google's globally for this Node process
dns.setServers(['8.8.8.8', '8.8.4.4']);
console.log('DNS servers enforced: 8.8.8.8');

import 'dotenv/config';
import 'express-async-errors';

import express from 'express';

const app = express();

// Internal Imports - Extensions (.js) are REQUIRED in ESM
import connectDB from './db/connect.js';
import productsRouter from './routes/products.js';
import {notFound} from './middleware/not-found.js';
import {errorHandlerMiddleware} from './middleware/error-handler.js';

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send(`<h1>Store API</h1><a href="/api/v1/products">products route</a>`);
});

app.use('/api/v1/products', productsRouter);

// error handling middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        // connection
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();