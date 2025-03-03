import { Injectable } from '@nestjs/common';
import { ClientRepositorieInterface } from 'src/domain/repositories-interface/client-repositories.interface';
import { DBService } from 'src/domain/database/db.service';
import { ObjectLiteral } from 'typeorm';

@Injectable()
export class ClientRepositorie<ClientEntity extends ObjectLiteral>
  implements ClientRepositorieInterface<ClientEntity>
{
  constructor(private readonly db: DBService<ClientEntity>) {}

  async findById(id: any): Promise<ClientEntity> {
    const client = await this.db.findById(id);

    if (client) {
      return client;
    }
    return {} as ClientEntity;
  }

  async findAll(): Promise<ClientEntity[]> {
    return await this.db.findAll();
  }

  async create(data: any): Promise<void> {
    await this.db.create(data);
  }
  async delete(id: any): Promise<void> {
    await this.db.delete(id);
  }
  async update(data: any): Promise<void> {
    await this.db.update(data);
  }
}
