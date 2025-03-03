import { Module } from '@nestjs/common';
import { BaseRepositorie } from './repositories/base/base-repositorie';
import { DbService } from 'src/infrastructure/services/database-service/database-service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseEntity } from './entities/base/base.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db', // Banco em memória (para testes)
      entities: [BaseEntity], // Adicione as entidades aqui
      synchronize: true, // Cria o banco e as tabelas automaticamente
    }),
    TypeOrmModule.forFeature([BaseEntity]), // Registra o repositório da entidade
  ],
  providers: [
    {
      provide: 'BaseRepositorie',
      useClass: BaseRepositorie,
    },

    DbService,
  ],
  exports: [
    {
      provide: 'BaseRepositorie',
      useClass: BaseRepositorie,
    },
    DbService,
  ],
})
export class DomainModule {}
