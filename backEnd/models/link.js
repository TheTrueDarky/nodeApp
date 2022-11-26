module.exports = (sequelize, Sequelize) => {
    const Link =
        sequelize.define("link",
    {

        description: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'link'
    }
    );
   
    return Link;
}