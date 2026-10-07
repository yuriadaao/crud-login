import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "login_crud",
  password: "*Yu31ad01aq91"
  port: 5432,
});
