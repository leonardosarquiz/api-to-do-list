// TaskRepository.ts
interface Task {
  id: number;
  title: string;
}

class TaskRepository {
  private tasks: Task[] = [];
  private nextId: number = 1;

  async findFirst({ title }: { title: string }): Promise<Task | null> {
    return this.tasks.find(task => task.title === title) || null;
  }

  async findAll(): Promise<Task[]> {
    return this.tasks;
  }

  async create({ title }: { title: string }): Promise<Task> {
    const task: Task = { id: this.nextId++, title };
    this.tasks.push(task);
    return task;
  }

  async deleteById(id: number): Promise<boolean> {
    const index = this.tasks.findIndex(task => task.id === id);

    if (index !== -1) {
      this.tasks.splice(index, 1);
      return true;
    }

    return false;
  }

  async updateById({ id, title }: { id: number; title: string }): Promise<boolean> {
    const task = this.tasks.find(task => task.id === id);

    if (task) {
      task.title = title;
      return true;
    }

    return false;
  }
}

export { TaskRepository };
