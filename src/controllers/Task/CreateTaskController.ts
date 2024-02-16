import { Request, Response } from 'express';
import { CreateTaskService } from '../../services/task/CreateTask';
import { TaskRepository } from '../../Repository/TaskRepository';

class CreateTaskController {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async handle(req: Request, res: Response) {
    try {
      const { title } = req.body;

      const createTaskService = new CreateTaskService(this.taskRepository);

      const task = await createTaskService.execute({ title });

      return res.json(task);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
}

export { CreateTaskController };