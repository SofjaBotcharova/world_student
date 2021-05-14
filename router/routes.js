const { Router } = require('express')
const router = Router()
const Sequelize = require('sequelize');
const sequelize = require('../config/config')
const op = Sequelize.Op;
const country = require('../mod/country')(sequelize, Sequelize.DataTypes)
const city = require('../mod/city')(sequelize, Sequelize.DataTypes)
router.get('/countries', async (req, res) => {
    country.findAll({
        attributes: ['name'],
        group: ['name']
    }).then((result) => res.json(result))
});

router.get("/country/:code/:name", (req, res) => {
    country.hasMany(city, { as: 'city', foreignKey: 'countrycode' })
    country.findOne({
        include: [
            {
                model: city, as: "city"
            }
        ],
        where: {
            [op.and]: [
                { code: req.params.code },
                { name: req.params.name }
            ]
        },
    })
        .then((result) => res.json(result))
});

router.get("/continent/Europe/countries", (req, res) => {
    country.findAll({ where: { continent: 'Europe' }, attributes: ['name', 'capital'] })
        .then((result) => res.json(result))
});

module.exports = router