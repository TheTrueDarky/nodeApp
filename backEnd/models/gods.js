module.exports = (sequelize, Sequelize) => {
    const God = sequelize.define("gods",
        {
            responsibility: {
                type: Sequelize.STRING
            },
           
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'gods'
        }
    );

    //Character.belongsTo(link, { foreignKey: 'link_id' });

    return God;
};