// swaggerDoc.js
const swaggerJSDoc = require('swagger-jsdoc');

var swaggerDefinition = {
    info : { // 정보 작성
        title : "grooom-post-server",
        version : "1.0.0",
        description : "grooom-post-server API DOCs" 
    },
    host : "localhost:3000", // base-url
    basePath : "/" // base path
};

var options = {
    swaggerDefinition: swaggerDefinition,
    apis : [__dirname + '/../routes/*.js',__dirname + '/../routes/post/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec