import Vendor from '..//models/Vendor.js';

const vendorData = [
    {
        vendor_name: 'Aspeed',
        vendor_address: '123 Street St., Los Angeles, CA, 91234',
        vendor_phone: '1231234567'
    },
    {
        vendor_name: 'Cindy',
        vendor_address: '321 Avenue Ave, Suit B, Los Angeles, CA, 91234',
        vendor_phone: '2131234567'
    }
];

const seedVendors = () => Vendor.bulkCreate(vendorData);

export default seedVendors;