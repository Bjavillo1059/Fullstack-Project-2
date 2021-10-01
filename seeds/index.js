const sequelize = require('../config/connection');
const seedEvents = require('./eventsData');
const seedGallery = require('./galleryData');
const seedOrgUser = require('./organizationData');
const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedOrgUser();

  await seedEvents();

  process.exit(0);
};

seedAll();