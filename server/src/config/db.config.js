const { Client } = require("pg");
const { Sequelize } = require("sequelize");
require("dotenv").config();

const dbName = process.env.DB_DATABASE;

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

exports.sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false, // Set to true if you want to see SQL queries logged
  }
);

exports.createDatabaseIfNotExists = async () => {
  const client = new Client(config);
  try {
    await client.connect();
    const result = await client.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`,
      [dbName]
    );

    if (result.rows.length === 0) {
      await client.query(`CREATE DATABASE "${dbName}"`);
      console.log(`Database "${dbName}" created successfully.`);
    } else {
      console.log(`Database "${dbName}" already exists.`);
    }
  } catch (error) {
    console.error("Error checking/creating database:", error);
  } finally {
    await client.end();
  }
};

const tables = [
  {
    name: "users",
    createQuery: `
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE,
        password VARCHAR(100)
      )
    `,
  },
  // {
  //   name: "roles",
  //   createQuery: `
  //     CREATE TABLE roles (
  //       id SERIAL PRIMARY KEY,
  //       name VARCHAR(100) UNIQUE
  //     )
  //   `,
  // },
  // {
  //   name: "permissions",
  //   createQuery: `
  //     CREATE TABLE permissions (
  //       id SERIAL PRIMARY KEY,
  //       name VARCHAR(100) UNIQUE
  //     )
  //   `,
  // },
  // {
  //   name: "user_roles",
  //   createQuery: `
  //     CREATE TABLE user_roles (
  //       user_id INTEGER REFERENCES users(id),
  //       role_id INTEGER REFERENCES roles(id),
  //       PRIMARY KEY (user_id, role_id)
  //     )
  //   `,
  // },
  // {
  //   name: "role_permissions",
  //   createQuery: `
  //     CREATE TABLE role_permissions (
  //       role_id INTEGER REFERENCES roles(id),
  //       permission_id INTEGER REFERENCES permissions(id),
  //       PRIMARY KEY (role_id, permission_id)
  //     )
  //   `,
  // },
];

exports.createTableIfNotExists = async () => {
  const client = new Client(config);
  try {
    await client.connect();

    for (const table of tables) {
      const tableResult = await client.query(
        `SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = $1`,
        [table.name]
      );

      if (tableResult.rows.length === 0) {
        console.log(`Table "${table.name}" does not exist. Creating table...`);
        await client.query(table.createQuery);
        console.log(`Table "${table.name}" created successfully.`);
      } else {
        console.log(`Table "${table.name}" already exists.`);
      }
    }
  } catch (err) {
    console.error("Error checking/creating tables:", err);
  } finally {
    await client.end();
  }
};
