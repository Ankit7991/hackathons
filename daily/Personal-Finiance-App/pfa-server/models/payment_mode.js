'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment_mode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
	payment_mode.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		mode: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false
		},
  }, {
    sequelize,
    modelName: 'payment_mode',
	freezeTableName: true
  });
  return payment_mode;
};