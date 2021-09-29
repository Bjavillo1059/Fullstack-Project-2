const router = require('express').Router()
const globalRoutes = require('./globalRoutes')

router.use("/", globalRoutes);

console.log("poop")

module.exports = router;