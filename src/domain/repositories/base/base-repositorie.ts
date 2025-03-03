import { Injectable } from '@nestjs/common';
import { BaseRepositorieInterface } from 'src/domain/repositories-interface/base-repositories.interface';
import { DBService } from 'src/domain/database/db.service';
import { ObjectLiteral } from 'typeorm';

@Injectable()
export class BaseRepositorie<BaseEntity extends ObjectLiteral>
  implements BaseRepositorieInterface<BaseEntity>
{
  constructor(private readonly db: DBService<BaseEntity>) {}

  async findById(id: any): Promise<BaseEntity> {
    const client = await this.db.findById(id);

    if (client) {
      return client;
    }
    return {} as BaseEntity;
  }

  async findAll(): Promise<BaseEntity[]> {
    return await this.db.findAll();
  }

  async create(data: any): Promise<void> {
    await this.db.create(data);
  }
  async delete(id: any): Promise<void> {
    await this.db.delete(id);
  }
  async update(data: any): Promise<void> {
    // await this.db.update(data, {
    //   conflictPaths: ['id'],
    //   skipUpdateIfNoValuesChanged: true,
    // });
  }
}
