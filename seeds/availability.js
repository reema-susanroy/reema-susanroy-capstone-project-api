/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('availability').del()
  await knex('availability').insert([
    { id: 1, provider_id: 1, date: '2024-04-10', status: 'available' },
    { id: 2, provider_id: 1, date: '2024-04-11', status: 'booked' },
    { id:3, provider_id: 1, date: '2024-04-12', status: 'available' },
    // Provider 2
    { id:4, provider_id: 2, date: '2024-04-10', status: 'booked' },
    { id:5,provider_id: 2, date: '2024-04-11', status: 'available' },
    { id: 6, provider_id: 2, date: '2024-04-12', status: 'available' },
    // Provider 3
    { id:7, provider_id: 3, date: '2024-04-10', status: 'available' },
    { id:8,provider_id: 3, date: '2024-04-11', status: 'booked' },
    { id:9,provider_id: 3, date: '2024-04-12', status: 'available' },
    // Provider 4
    { id:10,provider_id: 4, date: '2024-04-10', status: 'available' },
    { id:11,provider_id: 4, date: '2024-04-11', status: 'available' },
    { id:12,provider_id: 4, date: '2024-04-12', status: 'available' },
    // Provider 5
    { id:13,provider_id: 5, date: '2024-04-10', status: 'booked' },
    { id:14,provider_id: 5, date: '2024-04-11', status: 'booked' },
    { id:15, provider_id: 5, date: '2024-04-12', status: 'available' },

  ]);
};
