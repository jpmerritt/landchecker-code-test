const knexConfig = require("../knexfile.js");
const Knex = require("knex");
const neatCsv = require("neat-csv");
const readFilePromise = require("fs-readfile-promise");

const knex = Knex(knexConfig.development);

(async function() {
  try {
    await cleanStart();
    console.log("cleaning database");
    await createTables();
    console.log("creating tables");
    await seedData();
    console.log("seeding test data");
  } catch (e) {
    throw e;
  }
  console.log("exiting");
  process.exit();
})();

async function cleanStart() {
  let tableExists = null;
  tableExists = await knex.schema.hasTable("addresses");
  if (tableExists) await knex.schema.dropTable("addresses");
  tableExists = await knex.schema.hasTable("properties");
  if (tableExists) await knex.schema.dropTable("properties");
  tableExists = await knex.schema.hasTable("lgas");
  if (tableExists) await knex.schema.dropTable("lgas");
}

async function createTables() {
  await knex.schema.createTable("lgas", table => {
    table.integer("code").primary();
    table.text("name");
    table.text("long_name");
  });
  await knex.schema.createTable("properties", table => {
    table.bigIncrements().primary();
    table.integer("lga_code");
    table.foreign("lga_code").references("lgas.code");
    table.bigInteger("council_property_number");
    table.float("longitude");
    table.float("latitude");
  });
  await knex.schema.createTable("addresses", table => {
    table.bigInteger("feature_id");
    table.bigInteger("property_id");
    table.foreign("property_id").references("properties.id");
    table.text("full_address");
    table.integer("lga_code");
    table.foreign("lga_code").references("lgas.code");
    table.text("state");
    table.integer("postcode");
    table.primary(["feature_id", "property_id"]);
  });
}

async function seedData() {
  await readAndInsert("lgas");
  await readAndInsert("properties");
  await readAndInsert("addresses");
}

async function readAndInsert(tableName) {
  let sampleDataDir = __dirname + "/../requirements/sample_data";
  // read csv file
  let tableData = await readFilePromise(
    `${sampleDataDir}/${tableName}.csv`,
    "utf8"
  );
  // parse csv rows into objects
  tableData = await neatCsv(tableData);
  // cast empty cells to null
  tableData = tableData.map(row => {
    Object.keys(row).forEach(key => {
      if (row[key] === "") row[key] = null;
    });
    return row;
  });
  await knex(tableName).insert(tableData);
}
