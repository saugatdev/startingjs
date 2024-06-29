import { Sequelize } from "sequelize";
import "dotenv/config";

const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        dialectOptions: {
            options: {
                encrypt: true,
                enableArithAbort: true,
            },
        },
        logging: console.log // Enable detailed logging
    }
);

export default connection;
