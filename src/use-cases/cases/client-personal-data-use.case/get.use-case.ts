import { Inject, Injectable } from '@nestjs/common';
import { ClientPersonalDataEntity } from 'src/domain/register.entities';
import { ClientPersonalDataRepositorieInterface } from 'src/domain/repositories-interface/client-personal-data-repositories.interface';

@Injectable()
export class GetPersonalDataUseCase {
  constructor(
    @Inject('ClientPersonalDataRepositorie')
    private readonly baseRepositorie: ClientPersonalDataRepositorieInterface<
      ClientPersonalDataEntity[]
    >,
  ) {}
  async exec(): Promise<ClientPersonalDataEntity[] | []> {
    const response = await this.baseRepositorie.findAll();

    return response as unknown as ClientPersonalDataEntity[];
  }
}
