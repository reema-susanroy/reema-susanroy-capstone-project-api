/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('user_name').notNullable();
        table.string('user_address').notNullable();
        table.string('city').notNullable();
        table.string('country').notNullable();
        table.string('contact_phone').notNullable();
        table.string('contact_email').notNullable();
        table.varchar('password',500);
        table.timestamp('created_at').defaultTo(knex.fn.now())
        //table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
