const { User } = require('../models');

const userData = [
    {
        username: 'FatDragons',
        password: " ",
        email: 'ckreyjay@gmail.com',
        bio: 'Easy going and fun person, ready to take on the world!',
    },
    {
        username: 'MicMonsta',
        password: " ",
        email: 'crazylilmonster59@gmail.com',
        bio: 'I am all about having fun!',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
