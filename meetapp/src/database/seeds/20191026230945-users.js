module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Guilherme',
          email: 'guilherme@gmail.com',
          password_hash:
            '$2a$08$GG5kaEp7yikLNKguRX.Yu.8JiFsVM4i5OicK00i5OaQTtD5HEI7OS',
          avatar_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Thulio',
          email: 'thulio@gmail.com',
          password_hash:
            '$2a$08$n7YB9TYe6MtxQnDmUYtjJ.rkuGNXACqW03fKqnrBuv2fgnNWJJXii',
          avatar_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Admin',
          email: 'admin@gmail.com',
          password_hash:
            '$2a$08$xHvv.GAplLTElaxwyaWxLeQMCeLXfgBM6kLScCzm9C/8Y47HoTRxq',
          avatar_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'User',
          email: 'user@gmail.com',
          password_hash:
            '$2a$08$HCyAcztaiyOUYAL7qZnxY.STTNpaxZD1h62GHz8RF8JP2.AHsTWSa',
          avatar_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};
