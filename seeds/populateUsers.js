const { hashSync } = require('bcrypt');
const saltRounds = 10;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          user_name: 'symewave',
          first_name: 'Harrison',
          last_name: 'Symes',
          hash: hashSync('Krang', saltRounds),
          hourly_wage: 300
        },
        {
          id: 2,
          user_name: 'Schrodinger',
          first_name: 'Emil',
          last_name: 'Schroder',
          hash: hashSync('Krang', saltRounds),
          hourly_wage: 150
        },
        {
          id: 3,
          user_name: 'Lexitron',
          first_name: 'Lexi',
          last_name: 'Luo',
          hash: hashSync('Krang', saltRounds),
          hourly_wage: 180
        },
        {
          id: 4,
          user_name: 'BigBoiBen69',
          first_name: 'Ben',
          last_name: 'Van Derlaar',
          hash: hashSync('Krang', saltRounds),
          hourly_wage: 190
        },
        {
          id: 5,
          user_name: 'Yu_dont_know_me',
          first_name: 'Yuzuki',
          last_name: 'Sado',
          hash: hashSync('Krang', saltRounds),
          hourly_wage: 250
        },
      ]);
    });
};
