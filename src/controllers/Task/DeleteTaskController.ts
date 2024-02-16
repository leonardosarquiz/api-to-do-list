import { Request, Response } from 'express';

import { TaskRepository } from '../../Repository/TaskRepository';
import { DeleteTaskService } from '../../services/task/Deletask';

class DeleteTaskController {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async handle(req: Request, res: Response) {
    try {
      const taskId = parseInt(req.params.id, 10);

      const deleteTaskService = new DeleteTaskService(this.taskRepository);

      const isDeleted = await deleteTaskService.execute({ id: taskId });

      if (isDeleted) {
        return res.status(204).send(); // Resposta de sucesso sem conteúdo
      } else {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir a tarefa.' });
    }
  }
}

export { DeleteTaskController };