import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DomainModule } from './domain/domain.module';
import { UseCaseModule } from './use-cases/use-case.module';
import { InfraModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    DomainModule,
    InfraModule,
    UseCaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
