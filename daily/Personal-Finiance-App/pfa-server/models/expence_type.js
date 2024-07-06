'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class expence_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
	expence_type.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
  }, {
    sequelize,
    modelName: 'expence_type',
	freezeTableName: true
  });
  return expence_type;
};