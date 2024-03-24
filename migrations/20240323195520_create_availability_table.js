/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('availability', (table) => {
    table.increments('id').primary();
    table
        .integer('provider_id')
        .unsigned()
        .references('providers.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        table.date('date').notNullable();
        table.enum('status',['available' , 'booked']).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('availability');
};
