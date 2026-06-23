const { Sequelize } = require('sequelize'); // Import Sequelize library
require('dotenv').config();// Load environment variables from .env file
// Crea a una nueva instancia de Sequelize utilizando las variables de entorno para la configuración de la base de datos
const sequelize = new Sequelize( 
    process.env.DB_NAME,     // Nombre de la base de datos
    process.env.DB_USER,     // Usuario de la base de datos
    process.env.DB_PASSWORD, // Contraseña de la base de datos
    {
        host: process.env.DB_HOST, // Host de la base de datos
        port: process.env.DB_PORT, // Puerto de la base de datos
        dialect: 'mysql',          // Tipo de base de datos (MySQL en este caso)
        logging: false             // Desactiva los logs de Sequelize para evitar mostrar consultas SQL en la consola
    }
);

module.exports = sequelize; // Exporta la instancia de Sequelize para que pueda ser utilizada en otras partes de la aplicación