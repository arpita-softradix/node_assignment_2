const db = {
  development: {
    mysql: {
      client: {
        host: 'localhost',
        username: 'root',
        password: '',
        port: 3306,
        database: 'management',
        dialect: 'mysql',
        pool: {
          min: 2,
          max: 5,
          acquire: 30000,
          idle: 10000,
        },
      },
    },
  },
  staging: {
    mysql: {
      client: {
        host: process.env.DB_HOST,
        username: process.env.DB_USER_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.port,
        database: process.env.DB_DATABASE,
        dialect: process.env.DB_DIALECT,
        pool: {
          min: 2,
          max: 5,
          idle: 10000,
        },
      },
    },
  },
  production: {
    mysql: {
      client: {
        host: process.env.DB_HOST,
        username: process.env.DB_USER_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.port,
        database: process.env.DB_DATABASE,
        dialect: process.env.DB_DIALECT,
        pool: {
          min: 2,
          max: 5,
          idle: 10000,
        },
      },
    },
  },
};

export default db;
