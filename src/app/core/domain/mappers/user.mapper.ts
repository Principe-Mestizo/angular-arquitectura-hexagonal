
import { UserDto } from "../../infrastructure/dto/user.dto";
import { UserEntity } from "../entities/user.entity";



export class UserMapper {
  static fromDtoToDomain(dto: UserDto):UserEntity {
    return new UserEntity(
      dto.id_usuario,
      dto.nombre,
      dto.apellidos,
      dto.tipo_usuario,
      dto.edad,
      dto.fecha_nacimiento
    );
  }
  static fromDomainToDto( entity: UserEntity) : UserDto {
    return {
      id_usuario: entity.id_usuario,
      nombre: entity.nombre,
      apellidos: entity.apellidos,
      tipo_usuario: entity.tipo_usuario,
      edad : entity.edad,
      fecha_nacimiento : entity.fecha_nacimiento
    }
  }

}

