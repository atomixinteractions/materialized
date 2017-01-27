const ENV = process.env.NODE_ENV || 'development'

module.exports = require(`./webpack/${ENV}.js`)
