import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import http from 'http';
import config from './config.json';
import { CORS, Health } from './tools';
import { Controllers } from './controllers';

const app = express();

const service = {
  async init(app, config) {

    // Express configuration
    const port: number = parseInt(process.env.PORT || '8080');
    config.allowCors ? app.use(CORS.bind(this, app)) : null;
    config.healtCheck ? app.use('/health', Health) : null;

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());

    Controllers.forEach(controller => {
      app.use(config.basePath, controller);
    });
    app.set('port', port);
    const expressServer: http.Server = http.createServer(app);
    expressServer.listen(port);

    expressServer.on('error', service.listen);
    expressServer.on('listening', service.error);
    console.log('Server on port', port);
    return app;
  },
  listen (evt) {
    return evt;
  },
  error (evt) {
    return evt;
  }
}
service.init(app, config);

export default service;