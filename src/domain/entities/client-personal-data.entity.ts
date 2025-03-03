import { Entity, Column } from 'typeorm';
import DefaulEntity from 'src/common/entity/entity';

@Entity()
export class ClientPersonalDataEntity extends DefaulEntity {
  @Column()
  public readonly cpf: string;
  @Column()
  public readonly telefone: string;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  public readonly creation_date: Date;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  public readonly update_date: Date;
}
