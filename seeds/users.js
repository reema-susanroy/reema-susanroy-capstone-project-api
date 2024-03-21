/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id:1, user_name: 'John Doe', user_address: '123 Main St', city: 'New York', country: 'USA', contact_phone: '123-456-7890', contact_email: 'john@example.com' },
    { id:2, user_name: 'Jane Smith', user_address: '456 Elm St', city: 'Los Angeles', country: 'USA', contact_phone: '987-654-3210', contact_email: 'jane@example.com' },
    { id:3, user_name: 'Michael Johnson', user_address: '789 Oak St', city: 'Chicago', country: 'USA', contact_phone: '555-123-4567', contact_email: 'michael@example.com' },
    { id:4, user_name: 'Emily Brown', user_address: '321 Pine St', city: 'San Francisco', country: 'USA', contact_phone: '777-888-9999', contact_email: 'emily@example.com' },
    { id:5, user_name: 'David Wilson', user_address: '987 Cedar St', city: 'Seattle', country: 'USA', contact_phone: '111-222-3333', contact_email: 'david@example.com' },
    { id:6, user_name: 'Sarah Taylor', user_address: '654 Maple St', city: 'Boston', country: 'USA', contact_phone: '444-555-6666', contact_email: 'sarah@example.com' },
    { id:7, user_name: 'Robert Martinez', user_address: '852 Birch St', city: 'Dallas', country: 'USA', contact_phone: '999-888-7777', contact_email: 'robert@example.com' },
    { id:8, user_name: 'Amanda Garcia', user_address: '741 Pineapple St', city: 'Miami', country: 'USA', contact_phone: '666-777-8888', contact_email: 'amanda@example.com' },
    { id:9, user_name: 'Christopher Lee', user_address: '369 Cherry St', city: 'Houston', country: 'USA', contact_phone: '222-333-4444', contact_email: 'christopher@example.com' },
    { id:10, user_name: 'Laura Rodriguez', user_address: '159 Walnut St', city: 'Atlanta', country: 'USA', contact_phone: '888-999-0000', contact_email: 'laura@example.com' },
  ]);
};
