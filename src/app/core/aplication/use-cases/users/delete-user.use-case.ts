import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserRepositoryPort } from "../../../domain/ports/repositories/user.repository.port";

@Injectable({
  providedIn: 'root'
})

export class DeleteUserUseCase {

  constructor( private userRespository: UserRepositoryPort){}

  execute( userId: number) : Observable<void> {
    return this.userRespository.deleteUser( userId );
  }

}