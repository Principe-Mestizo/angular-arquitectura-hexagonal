import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserRepositoryPort } from "../../../domain/ports/repositories/user.repository.port";
import { UserEntity } from "../../../domain/entities/user.entity";



@Injectable({
  providedIn: 'root'
})

export class UpdateUserUseCase {

  constructor(private _userRespository: UserRepositoryPort){}


  exevute(user: UserEntity): Observable<void> {
    return this._userRespository.updateUser(user);
  }
}