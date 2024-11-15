import { DataTypes } from 'sequelize';
import { sequelize } from "../../../db/db-connection.js";

export const LeastSalesZone = sequelize.define('LeastSalesZone', {
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  location_name: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  total_sales: {
    type: DataTypes.DOUBLE,
    allowNull: true
  }
}, {
  tableName: 'least_sales_zone',
  timestamps: false,
  freezeTableName: true,
});
