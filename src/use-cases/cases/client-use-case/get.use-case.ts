import { Inject, Injectable } from '@nestjs/common';
import { ClientEntity } from 'src/domain/entities/client.entity';
import { ClientRepositorieInterface } from 'src/domain/repositories-interface/client-repositories.interface';

@Injectable()
export class GetUseCase {
  constructor(
    @Inject('ClientRepositorie')
    private readonly baseRepositorie: ClientRepositorieInterface<
      ClientEntity[]
    >,
  ) {}
  async exec(): Promise<ClientEntity[] | []> {
    const response = await this.baseRepositorie.findAll();

    return response as unknown as ClientEntity[];
  }
}
