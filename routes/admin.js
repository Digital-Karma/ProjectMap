const path = require('path');

const express = require('express');

const homeController = require('../controllers/home');

const router = express.Router();


router.get('/', homeController.showHome);

router.get('/destination', homeController.showMarker);
router.get('/add-marker', homeController.showBlog);
router.post('/add-marker', homeController.postAddMarker);
router.post('/add-post', homeController.postAddPost);
router.get('/about', homeController.getMarker);
// router.get('/about', homeController.showAbout);
router.get('/contact', homeController.showContact);

module.exports = router;
