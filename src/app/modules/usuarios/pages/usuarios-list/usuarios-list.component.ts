import { Component, OnInit, inject } from '@angular/core';
import { UserEntity } from '../../../../core/domain/entities/user.entity';

import { CommonModule } from '@angular/common';
import { GetUsersUseCase } from '../../../../core/aplication/use-cases/users';

@Component({
  selector: 'app-usuarios-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.sass'
})
export default class UsuariosListComponent implements OnInit{
  users: UserEntity[] = [];

  private _userRespository = inject(GetUsersUseCase)

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers():void {
    this._userRespository.execute().subscribe({
      next: (user: UserEntity[]) => {
        this.users = user;
        console.log(user);

      },
      error: (error) => {
        console.log('ERORR', error);

      }
    })
  }
}
