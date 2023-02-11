const mysql = require("mysql");

const { config } = mysql.createConnection(process.env.JAWSDB_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
