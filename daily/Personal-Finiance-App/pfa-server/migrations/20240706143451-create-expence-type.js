'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('expence_type', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			type: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			userId: {
				type: Sequelize.INTEGER,
				allowNull: true,
				defaultValue: null,
				references: {
					model: 'user'
				}
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
		await queryInterface.dropTable('expence_type');
	}
};