import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DomainModule } from './domain/domain.module';
import { UseCaseModule } from './use-cases/use-case.module';
import { InfraModule } from './infrastructure/infrastructure.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseEntity } from './domain/entities/base/base.entity';

@Module({
  imports: [
    InfraModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '../database.db', // Banco em memória (para testes)
      entities: [BaseEntity],
      synchronize: true, // Cria o banco e as tabelas automaticamente
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
