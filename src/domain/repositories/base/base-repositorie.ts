import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseEntity } from 'src/domain/entities/base/base.entity';
import { BaseRepositorieInterface } from 'src/domain/repositories-interface/base-repositories.interface';
import { Repository } from 'typeorm';

@Injectable()
export class BaseRepositorie implements BaseRepositorieInterface<BaseEntity> {
  constructor(
    @InjectRepository(BaseEntity)
    private readonly baseRepositorie: Repository<BaseEntity>,
  ) {}

  async findById(id: any): Promise<BaseEntity> {
    try {
      const client = await this.baseRepositorie.findOne(id);

      if (client) {
        return client;
      }
      return {} as BaseEntity;
    } catch (error) {
      throw new InternalServerErrorException(
        `Client nao existe, error: ${error}`,
      );
    }
  }

  async findAll(): Promise<BaseEntity[]> {
    try {
      return await this.baseRepositorie.find();
    } catch (error) {
      throw new InternalServerErrorException(
        `algum problema ocorreu durante a busca de clients, error: ${error}`,
      );
    }
  }

  async create(data: any): Promise<BaseEntity> {
    try {
      return await this.baseRepositorie.save(data);
    } catch (error) {
      throw new InternalServerErrorException(
        `Erro ao criar cliente, error: ${error}`,
      );
    }
  }
  async delete(id: any): Promise<void> {
    try {
      await this.baseRepositorie.delete(id);
    } catch (error) {
      throw new InternalServerErrorException(
        `Erro ao deletar cliente, error: ${error}`,
      );
    }
  }
  async update(data: any): Promise<void> {
    try {
      await this.baseRepositorie.upsert(data, {
        conflictPaths: ['id'],
        skipUpdateIfNoValuesChanged: true,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        `Erro ao atualizar cliente, error: ${error}`,
      );
    }
  }
}
