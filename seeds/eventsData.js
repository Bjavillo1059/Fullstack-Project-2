const { Events } = require('../models');

const eventsData = [
    {
        title: 'Outdoor Hike',
        entry: 'Looking for a quick little hike to get you motivated to explore and have fun?  Look no further, this place has lots of trails and sites!',
        date_published: 9/12/24,
        auther: 1,
    },
];

const seedEvents = () => Events.bulkCreate(eventsData);

module.exports = seedEvents;
