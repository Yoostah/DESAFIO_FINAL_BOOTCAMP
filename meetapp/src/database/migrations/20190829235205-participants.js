module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('subscriptions', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        allowNull: false,
      },
      meetup_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'meetups',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),

  down: queryInterface => queryInterface.dropTable('subscriptions'),
};
