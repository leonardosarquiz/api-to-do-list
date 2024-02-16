import { TaskRepository } from "../../Repository/TaskRepository";

interface UpdateTaskRequest {
  id: number;
  title: string;
}

class UpdateTaskService {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async execute({ id, title }: UpdateTaskRequest): Promise<boolean> {
    const taskToUpdate = await this.taskRepository.updateById({ id, title });
    return taskToUpdate;
  }
}

export { UpdateTaskService };