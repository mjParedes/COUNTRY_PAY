require('dotenv').config();

module.exports = {
    development: {
        username: 'postgres',
        password: 'root',
        database: 'countrypay_db',
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        logging: false,
        // username: 'usjibousucwj9iosdlnu',
        // password: 'sjFdecheOSRYlQmBQ1kI5dZSLKtajo',
        // database: 'bqwcqgazllgumqn7ptmq',
        // host: 'bqwcqgazllgumqn7ptmq-postgresql.services.clever-cloud.com',
        // dialect: 'postgres',
        // port: 5432,
        // loggin: false, 
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
