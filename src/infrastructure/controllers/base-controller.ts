import { Body, Controller, Get, Post } from '@nestjs/common';
import { BaseEntity } from 'src/domain/entities/base/base.entity';
import { CreateUseCase } from 'src/use-cases/cases/base-use-case/create.use-case';
import { GetUseCase } from 'src/use-cases/cases/base-use-case/get.use-case';

@Controller('base')
export class BaseController {
  constructor(
    private readonly getUsecase: GetUseCase,
    private readonly createUseCase: CreateUseCase,
  ) {}

  @Get()
  async getAll(): Promise<BaseEntity[]> {
    return await this.getUsecase.exec();
  }

  @Post()
  async create(
    @Body()
    data: {
      name: string;
      email: string;
      type: string;
      password: string;
    },
  ): Promise<BaseEntity> {
    return await this.createUseCase.exec(data);
  }
}
