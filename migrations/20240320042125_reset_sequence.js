exports.up = function(knex) {
    return knex.schema
      .alterTable('services', function (table) {
        table.integer('id').notNullable().alter();
      })
      .then(() => {
        return knex('services').update({ id: knex.raw('?? + 1', ['id']) }).where('id', '>', 0);
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .alterTable('services', function (table) {
        table.integer('id').notNullable().alter();
      });
  };