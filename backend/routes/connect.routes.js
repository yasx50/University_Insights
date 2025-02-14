import { Router } from 'express';
import  {addConnectedStudent,getAllConnectedStudents} from '../controllers/connect.controller.js';


// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
routes.post('/add-new-student', addConnectedStudent);
routes.get('/connected-student', getAllConnectedStudents);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);



export default routes;

