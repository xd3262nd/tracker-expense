module.exports = (sequelize, DataTypes) => {
    let Expense = sequelize.define('Expense', {

        name: {
            type: DataTypes.STRING,
            allowNull : false
        },

        method: {
            type: DataTypes.STRING,
            allowNull: false
        },

        category: {
            type: DataTypes.STRING,
            allowNull: false
        },

        value: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            
        }

    })

    Expense.sync({force: false}).then( () => {
        console.log('synced expense table')
    })

    return Expense
}