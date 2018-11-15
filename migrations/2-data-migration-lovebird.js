'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "betinaRing" to table "Induk"
 * addColumn "jantanRing" to table "Induk"
 * add data default to table "JenisLovebird"
 *
 **/

var info = {
    "revision": 2,
    "name": "data-migration-lovebird",
    "created": "2018-09-10T07:03:29.582Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "Induk",
            "betinaRing",
            {
                "type": Sequelize.STRING,
                "onUpdate": "CASCADE",
                "onDelete": "NO ACTION",
                "references": {
                    "model": "Lovebird",
                    "key": "ring"
                },
                "allowNull": false,
                "name": "betinaRing"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "Induk",
            "jantanRing",
            {
                "type": Sequelize.STRING,
                "onUpdate": "CASCADE",
                "onDelete": "NO ACTION",
                "references": {
                    "model": "Lovebird",
                    "key": "ring"
                },
                "allowNull": false,
                "name": "jantanRing"
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
            queryInterface.bulkInsert('JenisLovebird', [
              {
                nama: 'belum diketahui'
              }
            ]);
            console.log(`execute: add data default pada tabel JenisLovebird`);
        });
    },
    info: info
};
