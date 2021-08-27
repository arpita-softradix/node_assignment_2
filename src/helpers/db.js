import config from 'config';
import Sequelize from 'sequelize';
// import mysql from 'mysql2/promise';
export default class DB {
  constructor() {
    this.seqClient = null;
    this.dbConfig = config.db;
    this.mysqlConfigClient = this.dbConfig.mysql.client;
    this.db = {};
    this.isDbRunning = true;
  }

  async connectMySQLClient() {
    // eslint-disable-next-line no-useless-catch
    try {
      this.seqClient = new Sequelize(
        this.mysqlConfigClient.database,
        this.mysqlConfigClient.username,
        this.mysqlConfigClient.password,
        {
          host: this.mysqlConfigClient.host,
          port: this.mysqlConfigClient.port,
          dialect: this.mysqlConfigClient.dialect,
          operatorsAliases: false,
          pool: {
            min: this.mysqlConfigClient.pool.min,
            max: this.mysqlConfigClient.pool.max,
            idle: this.mysqlConfigClient.pool.idle,
          },
          define: {
            "underscored": true
          },
          logging: false,
        },
      );

      this.seqClient
        .authenticate()
        .then(() => {
          console.log(
            'Connection to Client DB has been established successfully.',
          );
        })
        .catch((err) => {
          console.error('Unable to connect to the Client database:', err);
        });
    } catch (err) {
      throw err;
    }
  }

  async init() {
    // await this.createDatabase()
    await this.connectMySQLClient();
    await this.setupModels();
  }

  async checkConnection() {
    try {
      return this.isDbRunning;
    } catch (error) {
      return !this.isDbRunning;
    }
  }

  async setupModels() {
    this.db.sqlClient = this.seqClient;
    // client table models
    this.db.models = {};
    this.db.models.Users = this.seqClient.import('../../database/models/users.js');
    this.db.models.Roles = this.seqClient.import('../../database/models/roles.js');
    this.db.models.Users_profile_image = this.seqClient.import('../../database/models/users_profile_image.js');


    // this.db.models.Technologies = this.seqClient.import("../../models/mysql/technologies.js");
    // this.db.models.Questions = this.seqClient.import("../../models/mysql/questions.js");

    // this.db.models.Questions.belongsTo(this.db.models.Technologies, {
    //   foreignKey: "technology_id"
    // });

    this.db.models.Users.belongsTo(this.db.models.Roles, { as: "roles", foreignKey: "role_id" });
    this.db.models.Roles.hasMany(this.db.models.Users, { as: "users", foreignKey: "role_id" });

    this.db.sqlClient.sync({force: false});
  }

  async getDB() {
    return this.db;
  }

  // async createDatabase() {
  //   console.log(this.mysqlConfigClient.host)
  //   let host = this.mysqlConfigClient.host
  //   let port = this.mysqlConfigClient.port
  //   let user = this.mysqlConfigClient.user
  //   let password = this.mysqlConfigClient.password
  //   const connection = await mysql.createConnection({
  //     host,
  //     port,
  //     user,
  //     password
  //   });
  // eslint-disable-next-line max-len
  //   await connection.query(`CREATE DATABASE IF NOT EXISTS \`${this.mysqlConfigClient.database}\`;`);
  // }
}
