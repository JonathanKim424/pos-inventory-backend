import Category from '../models/Category.js';

const categoryData = [
    {
        category_name: 'Shirts'
    },
    {
        category_name: 'Shorts'
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

export default seedCategories;