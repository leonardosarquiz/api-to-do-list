import { TaskRepository } from "../../Repository/TaskRepository";

class ListTaskService {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async execute() {
    const tasks = await this.taskRepository.findAll();

    return tasks;
  }
}

export { ListTaskService };