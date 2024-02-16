// CreateTaskService.ts
import { TaskRepository } from "../../Repository/TaskRepository";

interface TaskRequest {
  title: string;
}

class CreateTaskService {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async execute({ title }: TaskRequest) {
    if (!title) {
      throw new Error("Por favor, digite o nome da tarefa!");
    }

    const taskAlreadyExists = await this.taskRepository.findFirst({ title });

    if (taskAlreadyExists) {
      throw new Error("Esta tarefa já está cadastrada.");
    }

    const task = await this.taskRepository.create({ title });

    return task;
  }
}

export { CreateTaskService };
