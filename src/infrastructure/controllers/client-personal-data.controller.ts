import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientPersonalDataEntity } from 'src/domain/register.entities';
import { CreatePersonalDataUseCase } from 'src/use-cases/cases/client-personal-data-use.case/create.use-case';
import { GetPersonalDataUseCase } from 'src/use-cases/cases/client-personal-data-use.case/get.use-case';

@Controller('client-personal-data')
export class ClientPersonalDataController {
  constructor(
    private readonly getPersonalDataUseCase: GetPersonalDataUseCase,
    private readonly createPersonalDataUseCase: CreatePersonalDataUseCase,
  ) {}

  @Get()
  async getAll(): Promise<ClientPersonalDataEntity[]> {
    return await this.getPersonalDataUseCase.exec();
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
    return await this.createPersonalDataUseCase.exec(data);
  }
}
