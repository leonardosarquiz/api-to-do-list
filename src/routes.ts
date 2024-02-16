
import { Router } from 'express';
import { TaskRepository } from './Repository/TaskRepository';
import { CreateTaskController } from './controllers/Task/CreateTaskController';
import { ListTaskController } from './controllers/Task/ListTasksController';
import { DeleteTaskController } from './controllers/Task/DeleteTaskController';
import { UpdateTaskController } from './controllers/Task/UpdatetaskController';


const router = Router();
const taskRepository = new TaskRepository();
const createTaskController = new CreateTaskController(taskRepository);
const listTaskController = new ListTaskController(taskRepository);
const deleteTaskController = new DeleteTaskController(taskRepository);
const updateTaskController = new UpdateTaskController(taskRepository);

router.post('/tasks', (req, res) => createTaskController.handle(req, res));
router.get('/tasks', (req, res) => listTaskController.handle(req, res));
router.delete('/tasks/:id', (req, res) => deleteTaskController.handle(req, res));
router.put('/tasks/:id', (req, res) => updateTaskController.handle(req, res));

export { router };
