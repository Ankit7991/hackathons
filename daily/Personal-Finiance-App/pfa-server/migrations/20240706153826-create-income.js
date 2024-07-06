'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('income', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},

			amount: {
				type: Sequelize.STRING,
				defaultValue: '0',
			},
			time: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal(`current_timestamp`)
			},

			type: {
				type: Sequelize.INTEGER,
				allowNull: true,
				defaultValue: null,
				references: {
					model: 'income_type'
				}
			},
			location: {
				type: Sequelize.INTEGER,
				allowNull: true,
				defaultValue: null,
				references: {
					model: 'location'
				}
			},
			userId: {
				type: Sequelize.INTEGER,
				allowNull: true,
				defaultValue: null,
				references: {
					model: 'user'
				}
			},
			userId: {
				type: Sequelize.INTEGER,
				allowNull: true,
				defaultValue: null,
				references: {
					model: 'payment_mode'
				}
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('income');
	}
};