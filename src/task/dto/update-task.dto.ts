import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    title: string;
    description: string;
    status: string;
    dueDate: Date;
    createdAt: Date;
    updatedAt: Date;
}
