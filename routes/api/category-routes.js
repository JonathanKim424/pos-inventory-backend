import { Router } from 'express';
import Category from '../../models/Category.js';

const router = Router();

router.get('/', (req, res) => {
    Category.findAll({})
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

export default router;