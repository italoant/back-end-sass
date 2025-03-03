import { Module, DynamicModule, Provider } from '@nestjs/common';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { DBService } from './database/db.service';
import { BaseRepositorie } from './repositories/base/base-repositorie';
import * as entities from './register.entities'; // Importa todas as entidades
import { Repository } from 'typeorm';

@Module({})
export class DomainModule {
  static forRoot(): DynamicModule {
    // Converte o objeto de entidades em um array
    const entityArray = Object.values(entities);

    // Cria provedores dinâmicos para cada entidade
    const providers: Provider[] = entityArray.map((entity) => ({
      provide: `DbService_${entity.name}`, // Nome único para cada DbService
      useFactory: (repository: Repository<typeof entity>) =>
        new DBService<typeof entity>(repository),
      inject: [getRepositoryToken(entity)], // Injeta o repositório correto
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
          provide: 'BaseRepositorie',
          useFactory: (dbService: DBService<any>) =>
            new BaseRepositorie(dbService),
          inject: ['DbService_BaseEntity'], // Injeta o DbService da BaseEntity como padrão
        },
      ],
      exports: [...exports, 'BaseRepositorie'], // Exporta os provedores e o BaseRepositorie
    };
  }
}
