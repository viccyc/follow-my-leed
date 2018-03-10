exports.up = async function(knex, Promise) {
  return knex.schema.createTable("projects", function(table) {
    table.increments();
    table.integer('number').notNullable();
    table.string('name').notNullable();
    table.date('reg_date');
    table.date('cert_date');
    table.string('address').notNullable();
    table.string('city').notNullable();
    table.string('province').notNullable();
    table.integer('size').notNullable();
    table.foreign('project_type_id').references('project_types.id');
    table.foregin('owner_type_id').references('owner_types.id');
    table.foreign('certification_level_id').notNullable().references('certification_levels.id');
    table.foreign('rating_system_id').references('rating_systems.id');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("projects");
};