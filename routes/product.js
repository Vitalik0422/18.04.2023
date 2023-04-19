const express = require('express')
const fs = require('fs-extra')
const router = express.Router()

infoProductArr = [
    {name: './public/txt/name.txt'}
]

router.get('/product', (req, res) =>{
    const nameProduct = fs.readFileSync(infoProductArr[0].name, "utf-8")
    res.render('pages', {nameProduct: nameProduct})
})

module.exports = router;