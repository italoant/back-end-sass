import { Module } from '@nestjs/common';
import { UseCaseModule } from 'src/use-cases/use-case.module';
import { ClientController } from './controllers/client.controller';
import { ClientPersonalDataController } from './controllers/client-personal-data.controller';

@Module({
  imports: [UseCaseModule],
  controllers: [ClientController, ClientPersonalDataController],
})
export class InfraModule {}
