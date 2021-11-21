import { Sequelize } from "sequelize";

const db = new Sequelize('project_react', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;