import { Injectable } from '@angular/core';
import { UserRepositoryPort } from '../../domain/ports/repositories/user.repository.port';
import { Observable } from 'rxjs';
import { UserEntity } from '../../domain/entities/user.entity';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserRespositoryImpl implements UserRepositoryPort {

  constructor( private _userService: UserService){}

  getUsers(): Observable<UserEntity[]> {
    return this._userService.getUsers();
  }
  addUser(user: UserEntity): Observable<UserEntity> {
    return this._userService.addUser(user);
  }
  updateUser(user: UserEntity): Observable<void> {
    return this._userService.uppdateUser(user);
  }
  deleteUser(id: number): Observable<void> {
    return this._userService.deleteUser(id);
  }
}