'use strict'

const express = require('express')

const router = new express.Router();

//endpoint 
router.get('/', (req, res, next) => {
    res.status(200).send({
        "nome" :"André Chan RM:85245"
    });
});

module.exports = router;