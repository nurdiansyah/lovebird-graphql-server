'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "jenisKelamin" on table "Lovebird"
 *
 **/

var info = {
    "revision": 3,
    "name": "data-migration-lovebird",
    "created": "2018-09-11T09:21:52.980Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "changeColumn",
    params: [
        "Lovebird",
        "jenisKelamin",
        {
            "type": Sequelize.ENUM('-', 'jantan', 'betina'),
            "defaultValue": "-"
        }
    ]
}];

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
