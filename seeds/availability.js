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
    { id:16,provider_id: 6, date: '2024-04-10', status: 'booked' },
    { id:17,provider_id: 6, date: '2024-04-11', status: 'booked' },
    { id:18, provider_id: 6, date: '2024-04-12', status: 'available' },

    { id:19,provider_id: 7, date: '2024-04-10', status: 'booked' },
    { id:20,provider_id: 7, date: '2024-04-11', status: 'booked' },
    { id:21, provider_id: 7, date: '2024-04-12', status: 'available' },
    
    { id:22,provider_id: 8, date: '2024-04-10', status: 'booked' },
    { id:23,provider_id: 8, date: '2024-04-11', status: 'booked' },
    { id:24, provider_id: 8, date: '2024-04-12', status: 'available' },
    
    { id:25,provider_id: 9, date: '2024-04-10', status: 'booked' },
    { id:26,provider_id: 9, date: '2024-04-11', status: 'booked' },
    { id:27, provider_id:9, date: '2024-04-12', status: 'available' },
    
    { id:28,provider_id: 10, date: '2024-04-10', status: 'booked' },
    { id:29,provider_id: 10, date: '2024-04-11', status: 'booked' },
    { id:30, provider_id: 10, date: '2024-04-12', status: 'available' },
    
    { id:31,provider_id: 11, date: '2024-04-10', status: 'booked' },
    { id:32,provider_id: 11, date: '2024-04-11', status: 'booked' },
    { id:33, provider_id: 11, date: '2024-04-12', status: 'available' },
    { id:34,provider_id: 12, date: '2024-04-10', status: 'booked' },
    { id:35,provider_id: 12, date: '2024-04-11', status: 'booked' },
    { id:36, provider_id: 12, date: '2024-04-12', status: 'available' },
    
    { id:37,provider_id: 13, date: '2024-04-10', status: 'booked' },
    { id:38,provider_id: 13, date: '2024-04-11', status: 'booked' },
    { id:39, provider_id: 13, date: '2024-04-12', status: 'available' },
    { id:40,provider_id: 14, date: '2024-04-10', status: 'booked' },
    { id:41,provider_id: 14, date: '2024-04-11', status: 'booked' },
    { id:42, provider_id: 15, date: '2024-04-12', status: 'available' },
    
    { id:43,provider_id: 15, date: '2024-04-10', status: 'booked' },
    { id:44,provider_id: 16, date: '2024-04-11', status: 'booked' },
    { id:45, provider_id: 16, date: '2024-04-12', status: 'available' },
    { id:46,provider_id: 17, date: '2024-04-10', status: 'booked' },
    { id:47,provider_id: 17, date: '2024-04-11', status: 'booked' },
    { id:48, provider_id: 18, date: '2024-04-12', status: 'available' },
    
    { id:49,provider_id: 18, date: '2024-04-10', status: 'booked' },
    { id:50,provider_id: 19, date: '2024-04-11', status: 'booked' },
    { id:51, provider_id: 19, date: '2024-04-12', status: 'available' },
    { id:52,provider_id: 20, date: '2024-04-10', status: 'booked' },
    { id:53,provider_id: 20, date: '2024-04-11', status: 'booked' },
    { id:54, provider_id: 20, date: '2024-04-12', status: 'available' },


  ]);
};
