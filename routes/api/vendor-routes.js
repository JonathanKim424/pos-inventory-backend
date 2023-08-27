import { Router } from 'express';
import Vendor from '../../models/Vendor.js';

const router = Router();

router.get('/', (req, res) => {
    Vendor.findAll({
        attributes: [
            'id',
            'vendor_name',
            'vendor_address'
        ]
    })
    .then(dbVendorData => res.json(dbVendorData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

export default router;