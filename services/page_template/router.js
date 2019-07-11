var express = require('express');
var router = express.Router();
var handler = require('./handler')

/**  /page  **/

router.get('/templates', handler.list);
router.get('/template/:id/view', handler.view);
router.post('/template/create', handler.create);
router.post('/template/:id/update', handler.update);
router.post('/template/:id/remove', handler.remove);

module.exports = router;