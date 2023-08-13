import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

class Vendor extends Model {}

Vendor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        vendor_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1]
            }
        },
        vendor_address: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        vendor_phone: {
            type: DataTypes.STRING,
            validate: {
                isNumeric: true,
                len: 10
            }
        },
        vendor_fax: {
            type: DataTypes.INTEGER,
            validate: {
                isNumeric: true,
                len: 10
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vendor'
    }
);

export default Vendor;