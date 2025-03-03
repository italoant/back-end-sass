import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientEntity } from 'src/domain/entities/client.entity';
import { CreateUseCase } from 'src/use-cases/cases/client-use-case/create.use-case';
import { GetUseCase } from 'src/use-cases/cases/client-use-case/get.use-case';

@Controller('client')
export class ClientController {
  constructor(
    private readonly getUsecase: GetUseCase,
    private readonly createUseCase: CreateUseCase,
  ) {}

  @Get()
  async getAll(): Promise<ClientEntity[]> {
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
  ): Promise<unknown> {
    return await this.createUseCase.exec(data);
  }
}
