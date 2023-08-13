import { Router } from 'express';
import Vendor from '../../models/Vendor.js';

const router = Router();

router.get('/', (req, res) => {
    Vendor.findAll({})
    .then(dbVendorData => res.json(dbVendorData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

export default router;