import { HttpModule } from '@nestjs/axios';
import { DomainModule } from '../domain/domain.module';
import { Module } from '@nestjs/common';
import { CreateUseCase } from './cases/client-use-case/create.use-case';
import { GetUseCase } from './cases/client-use-case/get.use-case';
import { CreatePersonalDataUseCase } from './cases/client-personal-data-use.case/create.use-case';
import { GetPersonalDataUseCase } from './cases/client-personal-data-use.case/get.use-case';

@Module({
  imports: [HttpModule, DomainModule.forRoot()],
  providers: [
    GetUseCase,
    CreateUseCase,
    CreatePersonalDataUseCase,
    GetPersonalDataUseCase,
  ],
  exports: [
    GetUseCase,
    CreateUseCase,
    CreatePersonalDataUseCase,
    GetPersonalDataUseCase,
  ],
})
export class UseCaseModule {}
