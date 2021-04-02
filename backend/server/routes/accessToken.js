const express = require('express')
const Users = require('../models/Users')
const jwt = require('jsonwebtoken')
const createAccessToken = require('../../config/genatorToken')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const rf_token = req.cookies.refreshtoken;
        if (!rf_token) return res.status(400).json({ err: 'Please login now!' })

        const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
        if (!result) return res.status(400).json({ err: 'Your token is incorrect or has expired.' })

        const user = await Users.findById(result.id)
        if (!user) return res.status(400).json({ err: 'User does not exist.' })

        const access_token = createAccessToken({ id: user._id })
        res.json({
            access_token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
                root: user.root
            }
        })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
})

module.exports = router

