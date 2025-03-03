import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { InfraModule } from './infrastructure/infrastructure.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as entities from './domain/register.entities'; // Importa todas as entidades

@Module({
  imports: [
    InfraModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '../database.db', // Banco em memória (para testes)
      entities: Object.values(entities),
      synchronize: true, // Cria o banco e as tabelas automaticamente
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
