import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default abstract class DefaulEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;
  constructor(id: string) {
    Object.assign(this, id);
  }
}
