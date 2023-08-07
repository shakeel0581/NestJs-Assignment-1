import { HttpException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { StATUS } from './enum/task.enum';

@Injectable()
export class TaskService {
  private tasks: CreateTaskDto[] = [
    {
      id: Date.now(),
      title: 'demo title',
      description: 'Demo description for task',
      status: StATUS.ACTIVE,
      dueDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  create(createTaskDto: CreateTaskDto) {
    const newTask = {
      ...createTaskDto,
      id: Date.now(),
    };
    this.tasks.push(newTask);
    return newTask;
  }

  findAll() {
    return this.tasks;
  }

  findOne(id: number) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new HttpException("'task not found'!", 400);
    }

    return task;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {

    if(this.findOne(id)){
      this.tasks = this.tasks.map((task) => {
        if (task.id == id) {
          return { ...task, ...updateTaskDto };
        }
        return task;
      });
    }

    return this.findOne(id);
  }

  remove(id: number) {
    const taskToRemove = this.findOne(id);
    this.tasks = this.tasks.filter((task) => task.id != id);
    return taskToRemove;
  }
}
