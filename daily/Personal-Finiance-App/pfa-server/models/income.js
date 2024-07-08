'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class income extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of DataTypes lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	income.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},

		amount: {
			type: DataTypes.STRING,
			defaultValue: '0',
		},
		time: {
			type: DataTypes.DATE,
			required: false
		},

		type: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: null,
			references: {
				model: 'income_type'
			}
		},
		location: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: null,
			references: {
				model: 'location'
			}
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		paymentMode: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: null,
		},
	}, {
		sequelize,
		modelName: 'income',
	freezeTableName: true
	});
	return income;
};