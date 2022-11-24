module.exports = (sequelize, Sequelize) => {
    const Character = sequelize.define("character",
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
    link_id: {
    type: Sequelize.DOUBLE
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
    return Character;
   };