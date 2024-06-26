import { Injectable } from "@angular/core";;
import { Observable } from "rxjs";
import { UserRepositoryPort } from "../../../domain/ports/repositories/user.repository.port";
import { UserEntity } from "../../../domain/entities/user.entity";


@Injectable({
  providedIn: 'root'
})

export class AddUserUseCase {

  constructor(private UserRespository: UserRepositoryPort){}

  execute(user: UserEntity):Observable<UserEntity> {
    return this.UserRespository.addUser(user);
  }

}