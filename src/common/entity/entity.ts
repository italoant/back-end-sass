import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default abstract class DefaulEntity {
  @PrimaryGeneratedColumn()
  public readonly _id: string;
  constructor(id: string) {
    Object.assign(this, id);
  }
}
