import { Test, TestingModule } from '@nestjs/testing';
import { InternalServerErrorException } from '@nestjs/common';
import { BaseRepositorie } from './base-repositorie';
import { BaseRepositorieInterface } from 'src/domain/repositories-interface/base-repositories.interface';
import { DbService } from 'src/infrastructure/services/database-service/database-service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseEntity } from 'src/domain/entities/base/base.entity';

describe('BaseRepositorie', () => {
  let baseRepositorie: BaseRepositorie;
  let baseRepositorieMock: BaseRepositorieInterface;
  let dbService: DbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:', // Banco SQLite em memória
          entities: [BaseEntity],
          synchronize: true,
        }),
      ],
      providers: [
        BaseRepositorie,
        DbService,
        {
          provide: BaseRepositorie,
          useValue: {
            findById: jest.fn(),
            findAll: jest.fn(),
            create: jest.fn(),
            delete: jest.fn(),
            update: jest.fn(),
          },
        },
      ],
    }).compile();

    baseRepositorie = module.get<BaseRepositorie>(BaseRepositorie);
    baseRepositorieMock = module.get<BaseRepositorieInterface>(BaseRepositorie);
    dbService = module.get<DbService>(DbService);
  });

  it('deve ser definido', () => {
    expect(baseRepositorie).toBeDefined();
  });

  describe('findById', () => {
    it('deve chamar o método findById do BaseRepositorieInterface', async () => {
      baseRepositorieMock.findById = jest
        .fn()
        .mockResolvedValue({ id: 1, name: 'Cliente' });
      await baseRepositorie.findById(1);
      expect(baseRepositorieMock.findById).toHaveBeenCalledWith(1);
    });

    it('deve lançar InternalServerErrorException em caso de erro', async () => {
      baseRepositorieMock.findById = jest
        .fn()
        .mockRejectedValue(new Error('DB error'));
      await expect(baseRepositorie.findById(1)).rejects.toThrow(
        new InternalServerErrorException(
          `Client nao existe, error: Error: DB error`,
        ),
      );
    });
  });
});
