import sequelize from '../config/connection.js';
import seedVendors from './vendor-seeds.js';

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n---- DATABASE SYNCED ----\n');
    await seedVendors();
    console.log('\n---- VENDORS SEEDED ----\n');

    process.exit(0);
};

seedAll();