import { Module } from '@nestjs/common';
import { UseCaseModule } from 'src/use-cases/use-case.module';
import { BaseController } from './controllers/base-controller';

@Module({
  imports: [UseCaseModule],
  controllers: [BaseController],
})
export class InfraModule {}
