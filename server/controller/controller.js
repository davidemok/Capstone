const path = require('path')
require("dotenv").config();
const { CONNECTION_STRING } = process.env;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {ssl: {rejectUnauthorized: false}}})


module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        DROP TABLE IF EXISTS cart;

        CREATE TABLE cart (
            product VARCHAR,
            quantity INTEGER,
            price FLOAT
        );

        INSERT INTO cart (product, quantity, price)
        VALUES ('product 1', 0, 5.99);
        INSERT INTO cart (product, quantity, price)
        VALUES ('product 2', 0, 10.99);
        INSERT INTO cart (product, quantity, price)
        VALUES ('product 3', 0, 3.99);
        INSERT INTO cart (product, quantity, price)
        VALUES ('product 4', 0, 7.99);
        INSERT INTO cart (product, quantity, price)
        VALUES ('product 5', 0, 8.99);
        INSERT INTO cart (product, quantity, price)
        VALUES ('product 6', 0, 99.99);

        `)
        .then((dbRes) => {
            console.log('Bubberduck, the DB has been seeded')
            res.sendStatus(200)
        })
    },

    add1: (req, res) => {
        sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE product = 'product 1'`)
        .then(dbRes => {res.status(200);
        console.log("Bubberduck, the quantity has been added")})
    },
    add2: (req, res) => {
        sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE product = 'product 2'`)
        .then(dbRes => {res.status(200);
            console.log("Bubberduck, the quantity has been added")})
    },
    add3: (req, res) => {
        sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE product = 'product 3'`)
        .then(dbRes => {res.status(200);
            console.log("Bubberduck, the quantity has been added")})
    },
    add4: (req, res) => {
        sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE product = 'product 4'`)
        .then(dbRes => {res.status(200);
            console.log("Bubberduck, the quantity has been added")})
    },
    add5: (req, res) => {
        sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE product = 'product 5'`)
        .then(dbRes => {res.status(200);
            console.log("Bubberduck, the quantity has been added")})
    },
    add6: (req, res) => {
        sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE product = 'product 6'`)
        .then(dbRes => {res.status(200);
            console.log("Bubberduck, the quantity has been added")})
    },
    getTable: (req, res) => {
        sequelize.query(`SELECT * FROM cart`)
        .then(dbRes => {res.status(200).send(dbRes[0])
        console.log("got table")
        console.log(dbRes)})
    }
}