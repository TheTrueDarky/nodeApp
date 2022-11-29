module.exports = (sequelize, Sequelize, demon, giants, gods, monsters, mortals, primordials) => {//add foreign table here
    const Link =
        sequelize.define("link",
    {

        
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'link'
    }
    );
   

    Link.belongsTo(demon, { foreignKey: 'demon_id' });
    Link.belongsTo(giants, { foreignKey: 'giant_id' });
    Link.belongsTo(gods, { foreignKey: 'god_id' });
    Link.belongsTo(monsters, { foreignKey: 'monster_id' });
    Link.belongsTo(mortals, { foreignKey: 'mortal_id' });
    Link.belongsTo(primordials, { foreignKey: 'dprimordial_id' });
    return Link;
}