require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const BASE_URL = process.env.ACCESS_TOKEN_SECRET;

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) return res.sendStatus(401)

    try {
        const decoded = jwt.verify(token, BASE_URL)

        req.userId = decoded.id
        next()
    } catch (error) {
        console.log(error)
        return res.sendStatus(403)
    }
}

module.exports = verifyToken