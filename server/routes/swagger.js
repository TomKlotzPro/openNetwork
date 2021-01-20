const express = require("express");
const app = express();

const expressSwagger = require('express-swagger-generator')(app);

let options = {
    swaggerDefinition: {
        info: {
            description: 'The API documentation of Open network',
            title: 'Open network API docs',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/api/v1',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
		securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./*.js'] //Path to the API handle folder
};

expressSwagger(options)

module.exports = {
  path: "/",
  handler: app
};
