const express = require('express')
const router = express.Router();
const {shortUrl, getClicks} = require('../helper/shorturl')


router.post('/', shortUrl)
router.get('/stats/:shortId', getClicks )


module.exports = router