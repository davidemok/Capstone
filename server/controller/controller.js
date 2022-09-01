const path = require('path')
require("dotenv").config();
const { CONNECTION_STRING } = process.env;

const {Sequelize, Model} = require("sequelize");
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {ssl: {rejectUnauthorized: false}}})

let count1=0;
let count2=0;
let count3=0;
let count4=0;
let count5=0;
let count6=0;

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        DROP TABLE IF EXISTS cart;

        CREATE TABLE cart (
            productid INTEGER,
            productname VARCHAR,
            quantity INTEGER,
            price FLOAT
        );`)
        .then((dbRes) => {
            console.log('Bubberduck, the DB has been seeded')
            res.sendStatus(200)})
    },

    add1: (req, res) => {
        if(count1 === 0){
            count1 = 1
            sequelize.query(`INSERT INTO cart (productid, productname, quantity, price)
            VALUES (1, 'ACNH Fish Pochette', 1, 70)`)
            .then(dbRes => {res.status(200).send("added to cart")})}
        else{
            sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE productId = 1`)
            .then(dbRes => {res.status(200).send("added to cart")})
        }
            
    },
    add2: (req, res) => {
        if(count2===0){
            count2=1;
            sequelize.query(`INSERT INTO cart (productId, productname, quantity, price)
            VALUES (2, 'Van Gogh Tote Bag', 1, 45);`)
            .then(dbRes => {res.status(200).send("inserted")})
        }
        else{
            sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE productId = 2`)
            .then(dbRes => {res.status(200).send("added")})
        }
    },
    add3: (req, res) => {
        if(count3===0){
            count3=1;
            sequelize.query(`INSERT INTO cart (productId, productName, quantity, price) 
            VALUES (3, 'Valentine Block Quilt', 1, 250);`)
            .then(dbRes => {res.status(200).send("inserted")})
        }
        else{
            sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE productId = 3`)
            .then(dbRes => {res.status(200).send("added")})
        }
    },
    add4: (req, res) => {
        if(count4===0){
            count4=1
            sequelize.query(`INSERT INTO cart (productId, productname, quantity, price)
            VALUES (4, 'Cheese In The Trap Cardigan', 1, 350);`)
            .then(dbRes => {res.status(200).send("inserted")})
    }
    else{
        sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE productId = 4`)
        .then(dbRes => {res.status(200).send("added")})
    }
    },
    add5: (req, res) => {
        if(count5===0){
            count5=1;
            sequelize.query(`INSERT INTO cart (productId, productname, quantity, price)
            VALUES (5, 'Ginkgo Shoulderette Shawl', 1, 85);`)
            .then(dbRes => {res.status(200).send("inserted")})
    }
    else{
        sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE productId = 5`)
        .then(dbRes => {res.status(200).send("added")})
    }
    },
    add6: (req, res) => {
        if(count6===0){
            count6=1;
            sequelize.query(`INSERT INTO cart (productId, productname, quantity, price)
            VALUES (6, 'Faux Fur Heart Bustier', 1, 180);`)
            .then(dbRes => {res.status(200).send("inserted")})
        }
        else{
            sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE productId = 6`)
            .then(dbRes => {res.status(200).send("added")})
        }
    },
    fetchCart: (req, res) => {
        sequelize.query(`SELECT * FROM cart ORDER BY productId ASC`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
    },
    updateProduct: (req, res) => {
        let type = req.body.type;
        if(type === "plus"){
            sequelize.query(`UPDATE cart SET quantity = quantity + 1 WHERE productId = ${req.params.id}`)
            .then(dbRes => {res.status(200).send("hi")})}
        else if(type === "minus"){
                sequelize.query(`UPDATE cart SET quantity = quantity - 1 WHERE productId = ${req.params.id}`)
                .then(dbRes => {res.status(200).send("hi")})}
    },
    deleteProduct: (req, res) => {
        if(req.params.id === '1'){
            count1 = 0;
        }
        else if(req.params.id === '2'){
            count2 = 0;
        }
        else if(req.params.id === '3'){
            count3 = 0;
        }
        else if(req.params.id === '4'){
            count4 = 0;
        }
        else if(req.params.id === '5'){
            count5 = 0;
        }
        else if(req.params.id === '6'){
            count6 = 0;
        }
        sequelize.query(`DELETE FROM cart WHERE productId = ${req.params.id}`)
        .then(dbRes => {
            res.status(200).send("hi")})
    }
}