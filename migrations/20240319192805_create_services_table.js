/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('services', (table) => {
        table.increments('id').primary();
        table.string('service_name').notNullable();
        table.string('service_description').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('services');
};
