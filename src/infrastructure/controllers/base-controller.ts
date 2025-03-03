import { Controller, Get } from '@nestjs/common';
import { BaseUseCase } from 'src/use-cases/cases/base-use-case/base.use-case';

@Controller('base')
export class BaseController {
  constructor(private readonly baseUseCase: BaseUseCase) {}

  @Get()
  async verify(): Promise<string> {
    return await this.baseUseCase.exec();
  }
}
