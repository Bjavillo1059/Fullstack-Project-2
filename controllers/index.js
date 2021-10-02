const router = require('express').Router()
const globalRoutes = require('./globalRoutes')

router.use("/", globalRoutes);

console.log("it's running")

module.exports = router;