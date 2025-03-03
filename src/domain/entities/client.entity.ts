import { Entity, Column } from 'typeorm';
import DefaulEntity from 'src/common/entity/entity';

@Entity()
export class ClientEntity extends DefaulEntity {
  @Column()
  public readonly name: string;
  @Column()
  public readonly email: string;
  @Column()
  public readonly password: string;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  public readonly creation_date: Date;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  public readonly update_date: Date;
  @Column()
  public readonly type: string;
}
