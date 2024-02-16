import { Request, Response } from 'express';

import { TaskRepository } from '../../Repository/TaskRepository';
import { UpdateTaskService } from '../../services/task/UpdateTask';

class UpdateTaskController {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async handle(req: Request, res: Response) {
    try {
      const taskId = parseInt(req.params.id, 10);
      const { title } = req.body;

      const updateTaskService = new UpdateTaskService(this.taskRepository);

      const isUpdated = await updateTaskService.execute({ id: taskId, title });

      if (isUpdated) {
        return res.status(200).send();
      } else {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar a tarefa.' });
    }
  }
}

export { UpdateTaskController };