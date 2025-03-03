import { Inject, Injectable } from '@nestjs/common';
import { ClientEntity } from 'src/domain/entities/client.entity';
import { ClientRepositorieInterface } from 'src/domain/repositories-interface/client-repositories.interface';

@Injectable()
export class CreateUseCase {
  constructor(
    @Inject('ClientRepositorie')
    private readonly baseRepositorie: ClientRepositorieInterface<ClientEntity>,
  ) {}
  async exec(data: any): Promise<void> {
    return await this.baseRepositorie.create(data);
  }
}
