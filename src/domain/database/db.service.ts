import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Repository } from 'typeorm';

@Injectable()
export class DBService<T> {
  constructor(
    private readonly repository: Repository<any>,
    private readonly prismaClient: PrismaClient,
  ) {}

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
      const typeorm = await this.repository.find();

      // const prisma = await this.prismaClient.client_entity.findMany();

      return typeorm;
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
