import { Inject, Injectable } from '@nestjs/common';
import { BaseEntity } from 'src/domain/entities/base/base.entity';
import { BaseRepositorieInterface } from 'src/domain/repositories-interface/base-repositories.interface';

@Injectable()
export class CreateUseCase {
  constructor(
    @Inject('BaseRepositorie')
    private readonly baseRepositorie: BaseRepositorieInterface<BaseEntity>,
  ) {}
  async exec(data: any): Promise<unknown> {
    return await this.baseRepositorie.create(data);
  }
}
