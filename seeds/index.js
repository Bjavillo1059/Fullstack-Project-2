const sequelize = require('../config/connection');
const seedEvents = require('./eventsData');
const seedUser = require('./userData');
const seedOrgUser = require('./orgUserData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedOrgUser();

  await seedEvents();

  process.exit(0);
};

seedAll();
