import { Injectable } from '@nestjs/common';
import { DBService } from 'src/domain/database/db.service';
import { ClientPersonalDataRepositorieInterface } from '../repositories-interface/client-personal-data-repositories.interface';

@Injectable()
export class ClientPersonalDataRepositorie<ClientPersonalDataEntity>
  implements ClientPersonalDataRepositorieInterface<ClientPersonalDataEntity>
{
  constructor(private readonly db: DBService<ClientPersonalDataEntity>) {}

  async findById(id: any): Promise<ClientPersonalDataEntity> {
    const client = await this.db.findById(id);

    if (client) {
      return client;
    }
    return {} as ClientPersonalDataEntity;
  }

  async findAll(): Promise<ClientPersonalDataEntity[]> {
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
