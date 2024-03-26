/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('favorite', (table) => {
        table.increments('id').primary();
        table
            .integer('user_id')
            .unsigned()
            .references('users.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .integer('provider_id')
            .references('providers.id')
        table.boolean('isFavorite').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('favorite');
};
