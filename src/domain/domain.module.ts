import { Module } from '@nestjs/common';
import { BaseRepositorie } from './repositories/base/base-repositorie';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseEntity } from './entities/base/base.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BaseEntity]), // Registra o repositório da entidade
  ],
  providers: [
    {
      provide: 'BaseRepositorie',
      useClass: BaseRepositorie,
    },
  ],
  exports: [
    {
      provide: 'BaseRepositorie',
      useClass: BaseRepositorie,
    },
  ],
})
export class DomainModule {}
