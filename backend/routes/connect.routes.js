import { Router } from 'express';
import  addConnectedStudent from '../controllers/connect.controller.js';


// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
routes.post('/add-new-student', addConnectedStudent);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);



export default routes;

