// Product Routes
import express from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

// All product routes are protected
router.route('/')
  .post(protect, createProduct)
  .get(protect, getProducts);

router.route('/:id')
  .get(protect, getProductById)
  .put(protect, updateProduct)
  .delete(protect, deleteProduct);

export default router;
