const User = require('./User');
const Events = require('./Events');
const Orguser = require('./OrgUser');

User.hasMany(Events, {
    foreignKey: 'author',
    onDelete: 'CASCADE'
})

Events.belongsTo(User, )

module.exports = { User, Events, }