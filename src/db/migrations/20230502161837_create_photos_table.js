/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('photos', (table) => {
    table.increments('id').primary();
    table.string('url').notNullable();
    table.string('caption');
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users');
    table.timestamps(true, true);
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('photos');