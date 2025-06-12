const path = require("path");
const dotenv = require("dotenv");

// Încarcă .env din root-ul proiectului (cu un nivel mai sus de /config/)
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Afișare de debug (opțional, util pentru depanare)
console.log("Loaded DB config:", {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  db: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

function checkEnvVar(name) {
  if (!process.env[name]) {
    console.warn(`⚠️  WARNING: Environment variable ${name} is not set.`);
  }
}

// Verifică toate variabilele necesare
["DB_USER", "DB_PASSWORD", "DB_NAME", "DB_HOST"].forEach(checkEnvVar);

module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "1234",
    database: process.env.DB_NAME || "mini_sprint_2",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "1234",
    database: process.env.DB_NAME_TEST || "mini_sprint_2_test",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_PROD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    dialect: "postgres",
    logging: false,
  },
};
