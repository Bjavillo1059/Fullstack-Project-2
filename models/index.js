const User = require('./User');
const Events = require('./Events');

User.hasMany(Events, {
    foreignKey: 'author',
    onDelete: 'CASCADE'
})

Events.belongsTo(User, )

module.exports = { User, Events }