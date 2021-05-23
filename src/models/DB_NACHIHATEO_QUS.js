/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('DB_NACHIHATEO_QUS', {
        idx: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

    }, {
        sequelize,
        tableName: 'DB_NACHIHATEO_QUS'
    });
};