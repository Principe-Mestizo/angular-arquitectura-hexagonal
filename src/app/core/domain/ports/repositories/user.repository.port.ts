import { Observable } from 'rxjs';
import { UserEntity } from '../../entities/user.entity';


export abstract class UserRepositoryPort {
  abstract getUsers(): Observable<UserEntity[]>;
  abstract addUser(user: UserEntity): Observable<UserEntity>;
  abstract updateUser(user: UserEntity): Observable<void>;
  abstract deleteUser(id: number): Observable<void>;
}
