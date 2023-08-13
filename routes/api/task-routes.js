import { Router } from 'express';
import Task from '../../models/Task.js';

const router = Router();

router.get('/', (req, res) => {
    Task.findAll({})
    .then(dbTaskData => res.json(dbTaskData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

export default router;