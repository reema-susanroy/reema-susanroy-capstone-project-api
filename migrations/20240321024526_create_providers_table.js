/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('providers', (table) => {
        table.increments('id').primary();
        table
            .integer('service_id')
            .unsigned()
            .references('services.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
            table.varchar('provider_name',200).notNullable();
            table.varchar('provider_address',500).notNullable();
            table.varchar('city',500).notNullable();
            table.varchar('country',200).notNullable();
            table.varchar('contact_phone',200).notNullable();
            table.varchar('contact_email',200).notNullable();
            table.string('rating');
            table.string('Availability');
            table.timestamp('created_at').defaultTo(knex.fn.now())
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('providers');
};
