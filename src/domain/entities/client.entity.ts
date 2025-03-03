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
  @Column()
  public readonly type: string;
}
