module.exports = (sequelize, Sequelize, link) => {
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

    Character.belongsTo(link, { foreignKey: 'link_id' });

    return Character;
};