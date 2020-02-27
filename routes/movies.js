var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/movies');

router.get('/', moviesCtrl.index);
router.get('/:id', moviesCtrl.show);
router.post('/', moviesCtrl.create);
router.put('/:id', moviesCtrl.update);
router.delete('/movies/:id', moviesCtrl.delete);

module.exports = router;
