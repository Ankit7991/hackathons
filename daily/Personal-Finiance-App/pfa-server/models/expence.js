'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class expence extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of DataTypes lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	expence.init({
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
		},

		type: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: null,
		},
		location: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: null,
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: null,
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: null,
		},
	}, {
		sequelize,
		modelName: 'expence',
	freezeTableName: true
	});
	return expence;
};