import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default abstract class DefaulEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  public readonly creation_date: Date;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  public readonly update_date: Date;
  constructor(id: string) {
    Object.assign(this, id);
  }
}
