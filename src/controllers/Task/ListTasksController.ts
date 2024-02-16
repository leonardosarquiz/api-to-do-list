import { Request, Response } from 'express';

import { TaskRepository } from '../../Repository/TaskRepository';
import { ListTaskService } from '../../services/task/ListTasks';

class ListTaskController {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async handle(req: Request, res: Response) {
    try {
      const listTaskService = new ListTaskService(this.taskRepository);

      const tasks = await listTaskService.execute();

      return res.json(tasks);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar as tarefas.' });
    }
  }
}

export { ListTaskController };