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
        );`)
        .then((dbRes) => {
            console.log('Bubberduck, the DB has been seeded')
            res.sendStatus(200)
        })
    },

    add1: (req, res) => {
        sequelize.query(`INSERT INTO cart (product, quantity, price)
        VALUES ('product 1', 1, 5.99);`)
        .then(dbRes => {res.status(200);
        console.log("Bubberduck, the product has been added to the cart")})
    },
    add2: (req, res) => {
        sequelize.query(`INSERT INTO cart (product, quantity, price)
        VALUES ('product 2', 1, 10.99);`)
        .then(dbRes => {res.status(200);
            console.log("Bubberduck, the quantity has been added")})
    },
    add3: (req, res) => {
        sequelize.query(`INSERT INTO cart (product, quantity, price)
        VALUES ('product 3', 1, 3.99);`)
        .then(dbRes => {res.status(200);
            console.log("Bubberduck, the quantity has been added")})
    },
    add4: (req, res) => {
        sequelize.query(`INSERT INTO cart (product, quantity, price)
        VALUES ('product 4', 1, 7.99);`)
        .then(dbRes => {res.status(200);
            console.log("Bubberduck, the quantity has been added")})
    },
    add5: (req, res) => {
        sequelize.query(`INSERT INTO cart (product, quantity, price)
        VALUES ('product 5', 1, 8.99);`)
        .then(dbRes => {res.status(200);
            console.log("Bubberduck, the quantity has been added")})
    },
    add6: (req, res) => {
        sequelize.query(`INSERT INTO cart (product, quantity, price)
        VALUES ('product 6', 1, 99.99);`)
        .then(dbRes => {res.status(200);
            console.log("Bubberduck, the quantity has been added")})
    },
    getTable: (req, res) => {
        sequelize.query(`SELECT * FROM cart ORDER BY product ASC`)
        .then(dbRes => {res.status(200).send(dbRes[0])
        console.log("Bubberduck, we got the table")})
    },
    plus1: (req, res) => {
        sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE product = 'product 1'`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
    },
    plus2: (req, res) => {
        sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE product = 'product 2'`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
    },
    plus3: (req, res) => {
        sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE product = 'product 3'`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
    },
    plus4: (req, res) => {
        sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE product = 'product 4'`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
    },
    plus5: (req, res) => {
        sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE product = 'product 5'`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
    },
    plus6: (req, res) => {
        sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE product = 'product 6'`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
    },
    updateProduct: (req, res) => {
        let type = req.body.type;
        console.log(req.body)
        if(type === "plus"){
        sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE product = '${req.body.id}'`)
        .then(dbRes => {console.log("bubberducky?")
        res.status(200).send(dbRes[0])})}
        else if(type ==="minus"){
            sequelize.query(`UPDATE cart SET quantity = quantity - 1 WHERE product = '${req.body.id}'`)
            .then(dbRes => {console.log("am i exist")
                res.status(200).send(dbRes[0])})}
    },
    deleteProduct: (req, res) => {
        sequelize.query(`DELETE FROM cart WHERE product = 'req.body.id'`)
        .then(dbRes => {console.log("did i work")
        res.status(200)})
    }

}