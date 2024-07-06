'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('payment_mode', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			mode: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal(`current_timestamp`)
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal(`current_timestamp on update current_timestamp`)
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('payment_mode');
	}
};