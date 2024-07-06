'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
	location.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		address: {
			type: Sequelize.STRING,
			allowNull: false,
		},
			/* later state/city/country id's can be added */
  }, {
    sequelize,
    modelName: 'location',
  });
  return location;
};