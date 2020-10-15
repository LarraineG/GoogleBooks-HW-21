
const db = require("../models");
const axios = require("axios");

module.exports = {

    searchApi: (req, res) => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=harry")
            .then((response) => res.json(response.data))
    },

    save: (req, res) => {
        data.Books
            .create(req.body)
            .then(dbModel => res.json(dbModel))

    },

    findById: (req, res) => {
        data.Books
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))

    },

    findAll: (req, res) => {
        data.Books
            .find(req.query)
            .then(dbModel => res.json(dbModel))
        
    }

};