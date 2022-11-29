module.exports = (sequelize, Sequelize) => {
    const Mortal = sequelize.define("mortals",
        {
            job: {
                type: Sequelize.STRING
            },
           
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'mortals'
        }
    );

    //Character.belongsTo(link, { foreignKey: 'link_id' });

    return Mortal;
};