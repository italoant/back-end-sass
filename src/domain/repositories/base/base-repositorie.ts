import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { BaseRepositorieInterface } from 'src/domain/repositories-interface/base-repositories.interface';
import { DbService } from 'src/infrastructure/services/database-service/database-service';

@Injectable()
export class BaseRepositorie implements BaseRepositorieInterface {
  constructor(private readonly db: DbService) {}

  async findById(id: any): Promise<any> {
    try {
    } catch (e) {
      throw new InternalServerErrorException(`Client nao existe, error: ${e}`);
    }
  }

  async findAll(): Promise<any> {
    try {
    } catch (e) {
      throw new InternalServerErrorException(
        `algum problema ocorreu durante a busca de clients, error: ${e}`,
      );
    }
  }

  async create(data: any): Promise<any> {
    try {
    } catch (e) {
      throw new InternalServerErrorException(
        `Erro ao criar cliente, error: ${e}`,
      );
    }
  }
  async delete(id: any): Promise<void> {
    try {
    } catch (e) {
      throw new InternalServerErrorException(
        `Erro ao deletar cliente, error: ${e}`,
      );
    }
  }
  async update(data: any): Promise<any> {
    try {
    } catch (e) {
      throw new InternalServerErrorException(
        `Erro ao atualizar cliente, error: ${e}`,
      );
    }
  }
}
