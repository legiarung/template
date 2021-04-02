const express = require('express')
const router = express.Router()

const Foods = require('../models/Foods')

router.get('/', async (req, res) => {
    const food = await Foods.find().lean().sort({ date: -1 })
    res.json(food)
})

router.post('/add', async (req, res) => {
    try {
        const { name, price } = req.body

        const newFood = new Foods({
            name, price
        })

        await newFood.save()
        res.json({ msg: "Add Success!" })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

module.exports = router