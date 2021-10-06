const User = require('./User')
const Events = require('./Events')
const OrgUser = require('./OrgUser')

// User.hasMany(Events, {
//     foreignKey: 'author',
//     onDelete: 'CASCADE'
// })

// Events.belongsTo(User, OrgUser)

module.exports = { User, Events, }