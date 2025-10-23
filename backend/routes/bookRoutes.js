const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);
router.post('/', bookController.addBook);
router.post('/issue', bookController.issueBook);
router.post('/return', bookController.returnBook);

module.exports = router;
