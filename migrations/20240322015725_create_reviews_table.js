/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('reviews', (table) => {
        table.increments('id').primary();
        table
            .integer('provider_id')
            .unsigned()
            .references('providers.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
            table.varchar('user_name',200).notNullable();
            table.varchar('user_review',200).notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now())
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('reviews');
};
