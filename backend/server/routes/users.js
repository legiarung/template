const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()


const Users = require('../models/Users')

router.post('/register', async (req, res) => {
    try {
        const { name, email, password, cfpassword } = req.body

        const user = await Users.findOne({ email })
        if (user) return res.status(400).json({ err: 'This email already exists.' })

        const passwordHash = await bcrypt.hash(password, 12)
        const newUser = new Users({
            name, email, password: passwordHash, cfpassword
        })

        await newUser.save()
        res.json({ msg: "Register Success!" })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

module.exports = router