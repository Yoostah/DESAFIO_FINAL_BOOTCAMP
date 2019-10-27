module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'files',
      [
        {
          name: 'avatar_guilherme.png',
          path: 'avatar_guilherme.png',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'avatar_thulio.png',
          path: 'avatar_thulio.png',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'avatar_admin.png',
          path: 'avatar_admin.png',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'avatar_user.png',
          path: 'avatar_user.png',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'meetup_1.jpg',
          path: 'meetup_1.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'meetup_2.jpg',
          path: 'meetup_2.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'meetup_3.jpg',
          path: 'meetup_3.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'meetup_4.jpg',
          path: 'meetup_4.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'meetup_5.jpg',
          path: 'meetup_5.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'meetup_6.jpg',
          path: 'meetup_6.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'meetup_7.jpg',
          path: 'meetup_7.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'meetup_8.jpg',
          path: 'meetup_8.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'meetup_9.jpg',
          path: 'meetup_9.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'meetup_10.jpg',
          path: 'meetup_10.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'meetup_11.jpg',
          path: 'meetup_11.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'meetup_12.jpg',
          path: 'meetup_12.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: queryInterface => queryInterface.bulkDelete('files', null, {}),
};
