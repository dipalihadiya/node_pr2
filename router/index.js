const express = require('express');
const controller = require('../controllers/controlers');
const router = express.Router();

router.get('/', controller.defaultController );
router.get('/index',controller.defaultController);
router.get('/read', controller.readFormController );
router.post('/addform', controller.addFormController );
router.get('/editform/:id', controller.editFormController );
router.post('/updateform/:id', controller. updateFormController );
router.get('/deleteform/:id', controller.deleteFormController );




module.exports = router;

