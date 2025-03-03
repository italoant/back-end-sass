import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ObjectLiteral, Repository } from 'typeorm';

@Injectable()
export class DBService<T extends ObjectLiteral> {
  constructor(private readonly repository: Repository<T>) {}

  async findById(id: string): Promise<T> {
    try {
      //   const client = await this.repository.findOne(id);

      //   if (client) {
      //     return client;
      //   }
      return {} as T;
    } catch (error) {
      throw new InternalServerErrorException(
        `Erro ao buscar entidade, erro: ${error}`,
      );
    }
  }

  async findAll(): Promise<T[]> {
    try {
      return await this.repository.find();
    } catch (error) {
      throw new InternalServerErrorException(
        `Erro ao buscar todas as entidades, erro: ${error}`,
      );
    }
  }

  async create(data: T): Promise<T> {
    try {
      return await this.repository.save(data);
    } catch (error) {
      throw new InternalServerErrorException(
        `Erro ao criar entidade, erro: ${error}`,
      );
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.repository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException(
        `Erro ao deletar entidade, erro: ${error}`,
      );
    }
  }

  async update(data: T): Promise<void> {
    try {
      await this.repository.save(data); // Upsert simplificado
    } catch (error) {
      throw new InternalServerErrorException(
        `Erro ao atualizar entidade, erro: ${error}`,
      );
    }
  }
}
