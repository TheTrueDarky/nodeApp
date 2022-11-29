module.exports = (sequelize, Sequelize) => {
    const Primordial = sequelize.define("primordials",
        {
            department: {
                type: Sequelize.STRING
            },
           
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'primordials'
        }
    );

    //Character.belongsTo(link, { foreignKey: 'link_id' });

    return Primordial;
};