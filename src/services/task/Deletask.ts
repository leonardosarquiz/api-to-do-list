import { TaskRepository } from "../../Repository/TaskRepository";

interface DeleteTaskRequest {
  id: number;
}

class DeleteTaskService {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async execute({ id }: DeleteTaskRequest): Promise<boolean> {
    const taskToDelete = await this.taskRepository.deleteById(id);
    return taskToDelete;
  }
}

export { DeleteTaskService };