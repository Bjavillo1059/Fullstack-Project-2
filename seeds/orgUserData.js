const { OrgUser } = require('../models');

const orgUserData = [
    {
        username: 'XtremeNoice LLC.',
        password: "",
        remarks: 'Excellent service and customer care!'
    },
];

const seedOrgUser = () => OrgUser.bulkCreate(orgUserData);

module.exports = seedOrgUser;