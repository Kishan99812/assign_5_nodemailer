const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('home')
})

router.get('/gallery', (req, res) => {
    res.send('this is gallery')
})



module.exports = router;