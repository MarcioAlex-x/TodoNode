const {Sequelize} = require('sequelize')

const sequlize = new Sequelize('nodemvc', 'root','root',{
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequlize.authenticate()
    console.log('Conctado ao DB nodemvc')
}catch(error){
    console.log(error)
}

module.exports = sequlize
