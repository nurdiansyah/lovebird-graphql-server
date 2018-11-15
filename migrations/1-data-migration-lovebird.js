'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Farm", deps: []
 * createTable "JenisLovebird", deps: []
 * createTable "User", deps: []
 * createTable "Induk", deps: [Lovebird, Lovebird]
 * createTable "Lovebird", deps: [Farm, Induk, JenisLovebird]
 * createTable "IndukLogs", deps: [Induk]
 * createTable "LovebirdLogs", deps: [Lovebird]
 *
 **/

var info = {
    "revision": 1,
    "name": "data-migration-lovebird",
    "created": "2018-09-10T05:29:13.609Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Farm",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "defaultValue": Sequelize.UUIDV4,
                    "allowNull": false,
                    "primaryKey": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "JenisLovebird",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true
                },
                "nama": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "User",
            {
                "username": {
                    "type": Sequelize.STRING,
                    "primaryKey": true
                },
                "password": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "nama": {
                    "type": Sequelize.STRING,
                    "allowNull": false
                },
                "status": {
                    "type": Sequelize.INTEGER(10)
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Induk",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "defaultValue": Sequelize.UUIDV4,
                    "allowNull": false,
                    "primaryKey": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Lovebird",
            {
                "ring": {
                    "type": Sequelize.STRING,
                    "primaryKey": true
                },
                "nama": {
                    "type": Sequelize.STRING
                },
                "jenisKelamin": {
                    "type": Sequelize.ENUM('-', 'jantan', 'betina')
                },
                "lahir": {
                    "type": Sequelize.DATE
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "farmId": {
                    "type": Sequelize.UUID,
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "Farm",
                        "key": "id"
                    },
                    "allowNull": true,
                    "name": "farmId"
                },
                "indukId": {
                    "type": Sequelize.UUID,
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "Induk",
                        "key": "id"
                    },
                    "allowNull": true,
                    "name": "indukId"
                },
                "jenisLovebirdId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "JenisLovebird",
                        "key": "id"
                    },
                    "allowNull": null,
                    "name": "jenisLovebirdId"
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "IndukLogs",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "primaryKey": true,
                    "defaultValue": Sequelize.UUIDV4
                },
                "log": {
                    "type": Sequelize.STRING
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "indukId": {
                    "type": Sequelize.UUID,
                    "onUpdate": "CASCADE",
                    "onDelete": "NO ACTION",
                    "references": {
                        "model": "Induk",
                        "key": "id"
                    },
                    "allowNull": false,
                    "name": "indukId"
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "LovebirdLogs",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "log": {
                    "type": Sequelize.STRING
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "ring": {
                    "type": Sequelize.STRING,
                    "onUpdate": "CASCADE",
                    "onDelete": "NO ACTION",
                    "references": {
                        "model": "Lovebird",
                        "key": "ring"
                    },
                    "allowNull": false,
                    "name": "ring"
                }
            },
            {}
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
