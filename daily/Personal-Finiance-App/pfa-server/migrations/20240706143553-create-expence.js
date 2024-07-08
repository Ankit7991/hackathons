'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('expence', {
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
					model: 'expence_type'
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
				allowNull: false,
				references: {
					model: 'user'
				}
			},
			paymentMode: {
				type: Sequelize.INTEGER,
				allowNull: true,
				defaultValue: null,
				references: {
					model: 'payment_mode'
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
		await queryInterface.dropTable('expence');
	}
};