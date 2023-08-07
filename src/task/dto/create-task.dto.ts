export class CreateTaskDto {
    id: number;
    title: string;
    description: string;
    status: string;
    dueDate: Date;
    createdAt: Date;
    updatedAt: Date;
}

export default CreateTaskDto;
