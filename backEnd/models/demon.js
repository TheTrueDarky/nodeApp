module.exports = (sequelize, Sequelize) => {
    const Demon = sequelize.define("demon",
        {
            demon_type: {
                type: Sequelize.STRING
            },
            ability: {
                type: Sequelize.STRING
            },
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'demon'
        }
    );

    //Character.belongsTo(link, { foreignKey: 'link_id' });

    return Demon;
};