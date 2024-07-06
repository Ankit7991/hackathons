'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('user', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},

			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			age: {
				type: Sequelize.INTEGER,
				required: true
			},
			gender: {
				type: Sequelize.ENUM('Male', 'Female', 'Private'),
				defaultValue: 'Private'
			},

			/* 
				fields by gpt
				---------------
				✔️email: To store the user's email address (should be unique).
				✔️password: To store the user's hashed password.
				createdAt: Timestamp for when the user was created.
				updatedAt: Timestamp for when the user was last updated.
				address: To store the user's address.
				phone: To store the user's phone number.
				profilePicture: To store the URL of the user's profile picture.
				role: To define user roles, such as 'user' or 'admin'.
			*/

			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: true
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
		await queryInterface.dropTable('user');
	}
};