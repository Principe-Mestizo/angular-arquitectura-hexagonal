import { TaskDTO } from '../../infrastructure/dto/task.dto';
import { TaskEntity } from '../entities/task.entity';

export class TaskMapper {
  static fromDtoToDomain(dto: TaskDTO): TaskEntity {
    return new TaskEntity(dto.id, dto.description, dto.completed);
  }

  static fromDomainToDto(entity: TaskEntity): TaskDTO {
    return {
      id: entity.id,
      description: entity.description,
      completed: entity.completed,
    };
  }
}
