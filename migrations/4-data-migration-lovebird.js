'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "ring" on table "LovebirdLogs"
 * changeColumn "indukId" on table "IndukLogs"
 * changeColumn "id" on table "LovebirdLogs"
 * changeColumn "id" on table "LovebirdLogs"
 * changeColumn "id" on table "LovebirdLogs"
 * changeColumn "id" on table "LovebirdLogs"
 * changeColumn "indukId" on table "Lovebird"
 * changeColumn "indukId" on table "Lovebird"
 * changeColumn "indukId" on table "Lovebird"
 * changeColumn "jenisLovebirdId" on table "Lovebird"
 * changeColumn "jenisLovebirdId" on table "Lovebird"
 *
 **/

var info = {
    "revision": 4,
    "name": "data-migration-lovebird",
    "created": "2018-11-16T17:44:39.494Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "LovebirdLogs",
            "ring",
            {
                "type": Sequelize.STRING,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "Lovebird",
                    "key": "ring"
                },
                "allowNull": false,
                "name": "ring"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "IndukLogs",
            "indukId",
            {
                "type": Sequelize.UUID,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "Induk",
                    "key": "id"
                },
                "allowNull": false,
                "name": "indukId"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "LovebirdLogs",
            "id",
            {
                "type": Sequelize.UUID,
                "primaryKey": true,
                "defaultValue": Sequelize.UUIDV4
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "LovebirdLogs",
            "id",
            {
                "type": Sequelize.UUID,
                "primaryKey": true,
                "defaultValue": Sequelize.UUIDV4
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "LovebirdLogs",
            "id",
            {
                "type": Sequelize.UUID,
                "primaryKey": true,
                "defaultValue": Sequelize.UUIDV4
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "LovebirdLogs",
            "id",
            {
                "type": Sequelize.UUID,
                "primaryKey": true,
                "defaultValue": Sequelize.UUIDV4
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Lovebird",
            "indukId",
            {
                "type": Sequelize.UUID,
                "allowNull": true,
                "name": "indukId"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Lovebird",
            "indukId",
            {
                "type": Sequelize.UUID,
                "allowNull": true,
                "name": "indukId"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Lovebird",
            "indukId",
            {
                "type": Sequelize.UUID,
                "allowNull": true,
                "name": "indukId"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Lovebird",
            "jenisLovebirdId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "NO ACTION",
                "references": {
                    "model": "JenisLovebird",
                    "key": "id"
                },
                "allowNull": false,
                "name": "jenisLovebirdId"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Lovebird",
            "jenisLovebirdId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "NO ACTION",
                "references": {
                    "model": "JenisLovebird",
                    "key": "id"
                },
                "allowNull": false,
                "name": "jenisLovebirdId"
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn + " " + command.params[0]);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
