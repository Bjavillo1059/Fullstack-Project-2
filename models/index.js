const User = require('./User')
const Events = require('./Events')
const Events = require('./Business')

User.hasMany(Events, {
    foreignKey: 'author',
    onDelete: 'CASCADE'
})

Events.belongsTo(User, )

module.exports = { User, Events, Business }