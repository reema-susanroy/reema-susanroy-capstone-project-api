/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('booking', (table) => {
        table.increments('id').primary();
        table.integer('provider_id')
        table.integer('user_id')
        .unsigned()
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable();
        table.integer('service_id').notNullable();
        table.varchar('issue_description',500).notNullable();
        // table.varchar('address',500).notNullable();
        table.date('booked_on').notNullable,
        table.timestamp('created_at').defaultTo(knex.fn.now())
        });  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('booking');
};
