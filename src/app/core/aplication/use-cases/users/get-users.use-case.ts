import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserRepositoryPort } from "../../../domain/ports/repositories/user.repository.port";
import { UserEntity } from "../../../domain/entities/user.entity";


@Injectable({
    providedIn: 'root'
})

export class GetUsersUseCase {

    constructor( private _userRepository: UserRepositoryPort){}
    execute():Observable<UserEntity[]>{
        return this._userRepository.getUsers();
    }
}