require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.HOST,
        dialect: process.env.DB_DIALECT,
        port: 5432,
        loggin: false,
    },
    test: {
        username: 'postgres',
        password: 'mypassword',
        database: 'mydatabase_test',
        host: '127.0.0.1',
        dialect: 'postgres',
        port: '5432',
        define: {
            underscored: true,
        },
    },
    production: {
        username: 'postgres',
        password: 'mypassword',
        database: 'mydatabase_production',
        host: '127.0.0.1',
        dialect: 'postgres',
        port: '5432',
        define: {
            underscored: true,
        },
    },
};
