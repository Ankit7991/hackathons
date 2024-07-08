'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('location', {
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
			userId: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					model: 'user'
				}
			},
			/* later state/city/country id's can be added */
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
		await queryInterface.dropTable('location');
	}
};