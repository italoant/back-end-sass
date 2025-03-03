import { Entity, Column } from 'typeorm';
import DefaulEntity from 'src/common/entity/entity';

@Entity()
export class ClientPersonalDataEntity extends DefaulEntity {
  @Column()
  public readonly cpf: string;
  @Column()
  public readonly telefone: string;
}
