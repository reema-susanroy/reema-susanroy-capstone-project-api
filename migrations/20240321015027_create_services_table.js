/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('services', (table) => {
        table.increments('id').primary();
        table.varchar('service_name',200).notNullable();
        table.varchar('service_description',500).notNullable();
        table.varchar('service_need',500);
        table.varchar('service_image',500);
        table.json('service_provided');
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
