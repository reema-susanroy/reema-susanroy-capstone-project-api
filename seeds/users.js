/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id:1, 
      user_name: 'John Doe', 
      user_address: '123 Main St', 
      city: 'New York', 
      country: 'USA', 
      contact_phone: '123-456-7890', 
      contact_email: 'john@example.com',
      password: '12345' 
    }
  ]);
};
