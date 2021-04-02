const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

const createAccessToken = require('../../config/genatorToken')
const createRefreshToken = require('../../config/genatorToken')

const Users = require('../models/Users')

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const { email, password } = req.body
        const user = await Users.findOne({ email })
        if (!user) return res.status(400).json({ err: 'This user does not exist.' })
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ err: 'Incorrect password.' })

        const access_token = createAccessToken({ id: user._id })
        const refresh_token = createRefreshToken({ id: user._id })

        res.json({
            msg: "Login Success!",
            refresh_token,
            access_token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
                root: user.root
            }
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

module.exports = router