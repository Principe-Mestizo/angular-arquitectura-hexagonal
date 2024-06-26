import { Injectable } from '@angular/core';
import { HttpAdapter } from '../adapters/http/http.adapter';
import { Observable, delay, map } from 'rxjs';
import { UserEntity } from '../../domain/entities/user.entity';
import { UserDto } from '../dto/user.dto';
import { UserMapper } from '../../domain/mappers/user.mapper';
import { URL_USER_ALL } from '../../../shared/config/config';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private endpoint = `${URL_USER_ALL}`;

  constructor( private hhtpAdapter: HttpAdapter){}

  getUsers():Observable<UserEntity[]>{
    return this.hhtpAdapter.get<UserDto[]>(this.endpoint).pipe(
      delay(1000),
      map((apiUsers) => apiUsers.map( UserMapper.fromDtoToDomain))
    )
  }


  addUser( user: UserEntity ):Observable<UserEntity> {
    const apiUser  = UserMapper.fromDomainToDto(user);
    return this.hhtpAdapter.post<UserDto>(this.endpoint, apiUser).pipe(
      map(UserMapper.fromDtoToDomain)
    )
  }

  uppdateUser( user: UserEntity): Observable<void> {
    const url = `${this.endpoint}/${user.id_usuario}`;
    const userApi = UserMapper.fromDomainToDto(user);
    return this.hhtpAdapter.put<void>(url, userApi);
  }


  deleteUser( id: number):Observable<void> {
    const url = `${this.endpoint}/${id}`;
    return this.hhtpAdapter.delete<void>(url);
  }
}