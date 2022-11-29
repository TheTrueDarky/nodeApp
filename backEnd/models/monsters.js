module.exports = (sequelize, Sequelize) => {
    const Monster = sequelize.define("monsters",
        {
            monster_type: {
                type: Sequelize.STRING
            },
            abilities: {
                type: Sequelize.STRING
            },
           
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'monsters'
        }
    );

    //Character.belongsTo(link, { foreignKey: 'link_id' });

    return Monster;
};