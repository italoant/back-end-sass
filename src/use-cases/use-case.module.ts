import { HttpModule } from '@nestjs/axios';
import { DomainModule } from '../domain/domain.module';
import { Module } from '@nestjs/common';
import { BaseUseCase } from './cases/base-use-case/base.use-case';

@Module({
  imports: [HttpModule, DomainModule],
  providers: [BaseUseCase],
  exports: [BaseUseCase],
})
export class UseCaseModule {}
