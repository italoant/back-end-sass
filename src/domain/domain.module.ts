import { Module, DynamicModule, Provider } from '@nestjs/common';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { DBService } from './database/db.service';
import { ClientRepositorie } from './repositories/client-repositorie';
import * as entities from './register.entities'; // Importa todas as entidades
import { Repository } from 'typeorm';
import { ClientPersonalDataRepositorie } from './repositories/client-personal-data-repositorie';
import { PrismaClient } from '@prisma/client'; // Importe o PrismaClient diretamente

@Module({})
export class DomainModule {
  static forRoot(): DynamicModule {
    // Converte o objeto de entidades em um array
    const entityArray = Object.values(entities);

    // Cria provedores dinâmicos para cada entidade
    const providers: Provider[] = entityArray.map((entity) => ({
      provide: `db_service_${entity.name}`, // Nome único para cada DbService
      useFactory: (
        repository: Repository<typeof entity>,
        prismaClient: PrismaClient, // Injeta o PrismaClient diretamente
      ) => new DBService<typeof entity>(repository, prismaClient),
      inject: [getRepositoryToken(entity), 'PRISMA_CLIENT'], // Injeta o repositório e o provedor do PrismaClient
    }));

    // Exporta os provedores para uso em outros módulos
    const exports = providers.map((provider) => {
      if (typeof provider === 'object' && 'provide' in provider) {
        return provider.provide;
      }
      throw new Error(
        'Provider inválido: deve ser um objeto com a propriedade "provide".',
      );
    });

    return {
      module: DomainModule,
      imports: [TypeOrmModule.forFeature(entityArray)], // Registra todas as entidades no TypeORM
      providers: [
        ...providers,
        {
          provide: 'PRISMA_CLIENT', // Provedor personalizado para o PrismaClient
          useFactory: () => new PrismaClient(),
        },
        {
          provide: 'ClientRepositorie',
          useFactory: (dbService: DBService<entities.ClientEntity>) =>
            new ClientRepositorie(dbService),
          inject: ['db_service_ClientEntity'],
        },
        {
          provide: 'ClientPersonalDataRepositorie',
          useFactory: (
            dbService: DBService<entities.ClientPersonalDataEntity>,
          ) => new ClientPersonalDataRepositorie(dbService),
          inject: ['db_service_ClientPersonalDataEntity'],
        },
      ],
      exports: [
        ...exports,
        'ClientRepositorie',
        'ClientPersonalDataRepositorie',
        'PRISMA_CLIENT', // Exporta o provedor do PrismaClient
      ], // Exporta os provedores e os repositories
    };
  }
}
