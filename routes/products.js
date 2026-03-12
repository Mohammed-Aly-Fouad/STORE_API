import express from 'express';
const router = express.Router();

// 1. Use curly braces for named imports
// 2. You MUST include the .js extension
import { getAllProducts, getAllProductsStatic } from '../controllers/products.js';

router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic);

// 3. Use export default for the router
export default router;