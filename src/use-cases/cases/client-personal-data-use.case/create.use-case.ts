import { Inject, Injectable } from '@nestjs/common';
import { ClientPersonalDataEntity } from 'src/domain/register.entities';
import { ClientRepositorieInterface } from 'src/domain/repositories-interface/client-repositories.interface';

@Injectable()
export class CreatePersonalDataUseCase {
  constructor(
    @Inject('ClientPersonalDataRepositorie')
    private readonly baseRepositorie: ClientRepositorieInterface<ClientPersonalDataEntity>,
  ) {}
  async exec(data: any): Promise<void> {
    return await this.baseRepositorie.create(data);
  }
}
