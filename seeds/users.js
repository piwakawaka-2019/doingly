exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([{
          id: 1,
          first_name: 'Vinnie',
          last_name: 'Reid'
        },
        {
          id: 2,
          first_name: 'Fud',
          last_name: 'Z'
        },
        {
          id: 3,
          first_name: 'Cliff',
          last_name: 'Ah-Leong'
        },
        {
          id: 4,
          first_name: 'Ashleigh',
          last_name: 'Vivier'
        },
        {
          id: 5,
          first_name: 'Blaine',
          last_name: 'Western'
        }
      ])
    })
}