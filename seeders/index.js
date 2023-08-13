import seedCategories from './category-seeds.js';
import seedTasks from './task-seeds.js';
import sequelize from '../config/connection.js';

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n---- DATABASE SYNCED ----\n');
    await seedCategories();
    console.log('\n---- CATEGORIES SEEDED ----\n');
    await seedTasks();
    console.log('\n---- TASKS SEEDED ----\n');

    process.exit(0);
};

seedAll();