module.exports = (sequelize, Sequelize, demon, giants, gods, monsters, mortals, primordials) => {
    const Character = sequelize.define("characters",
        {
            first_name: {
                type: Sequelize.STRING
            },
            surname: {
                type: Sequelize.STRING
            },
            gender: {
                type: Sequelize.STRING
            },
            age: {
                type: Sequelize.DOUBLE
            },
            deaths: {
                type: Sequelize.DOUBLE
            },
            character_type: {
                type: Sequelize.STRING
            },

            auth_notes: {
                type: Sequelize.STRING
            },
            comments: {
                type: Sequelize.STRING
            },
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'characters'
        }
    );

    // Character.belongsTo(link, { foreignKey: 'link_id' });
    Character.belongsToMany(demon, {through:'link', foreignKey:'demon_id', timestamps:false, otherKey:'id'});
    Character.belongsToMany(giants, {through:'link', foreignKey:'giant_id', timestamps:false, otherKey:'id'});
    Character.belongsToMany(gods, {through:'link', foreignKey:'god_id', timestamps:false, otherKey:'id'});
    Character.belongsToMany(monsters, {through:'link', foreignKey:'monster_id', timestamps:false, otherKey:'id'});
    Character.belongsToMany(mortals, {through:'link', foreignKey:'mortal_id', timestamps:false, otherKey:'id'});
    Character.belongsToMany(primordials, {through:'link', foreignKey:'primordial_id', timestamps:false, otherKey:'id'});

    return Character;
};