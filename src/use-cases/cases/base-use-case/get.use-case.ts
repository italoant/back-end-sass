import { Inject, Injectable } from '@nestjs/common';
import { BaseEntity } from 'src/domain/entities/base/base.entity';
import { BaseRepositorieInterface } from 'src/domain/repositories-interface/base-repositories.interface';

@Injectable()
export class GetUseCase {
  constructor(
    @Inject('BaseRepositorie')
    private readonly baseRepositorie: BaseRepositorieInterface<BaseEntity[]>,
  ) {}
  async exec(): Promise<BaseEntity[] | []> {
    const response = await this.baseRepositorie.findAll();

    return response as unknown as BaseEntity[];
  }
}
