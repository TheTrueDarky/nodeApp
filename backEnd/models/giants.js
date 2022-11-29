module.exports = (sequelize, Sequelize) => {
    const Giant = sequelize.define("giants",
        {
            role: {
                type: Sequelize.STRING
            },
           
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'giants'
        }
    );

    //Character.belongsTo(link, { foreignKey: 'link_id' });

    return Giant;
};