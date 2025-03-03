import { HttpModule } from '@nestjs/axios';
import { DomainModule } from '../domain/domain.module';
import { Module } from '@nestjs/common';
import { CreateUseCase } from './cases/base-use-case/create.use-case';
import { GetUseCase } from './cases/base-use-case/get.use-case';

@Module({
  imports: [HttpModule, DomainModule.forRoot()],
  providers: [GetUseCase, CreateUseCase],
  exports: [GetUseCase, CreateUseCase],
})
export class UseCaseModule {}
