import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TaskRepositoryPort } from './core/domain/ports/repositories/task.respository.port';
import { TaskRepositoryImpl } from './core/infrastructure/repositories/task.respository.impl';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { UserRepositoryPort } from './core/domain/ports/repositories/user.repository.port';
import { UserRespositoryImpl } from './core/infrastructure/repositories/user.repository.impl';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    { provide: TaskRepositoryPort, useClass: TaskRepositoryImpl},
    { provide: UserRepositoryPort, useClass: UserRespositoryImpl}

  ]
};
