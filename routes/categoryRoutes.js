const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getAllCategories);

router.get('/new', categoryController.createCategory); 
router.post('/new', categoryController.createCategory); 

router.get('/:id/edit', categoryController.updateCategory); 
router.post('/:id/edit', categoryController.updateCategory); 

router.delete('/:id', categoryController.deleteCategory);

module.exports = router;