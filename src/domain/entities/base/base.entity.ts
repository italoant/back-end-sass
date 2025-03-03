import { Entity, Column } from 'typeorm';
import DefaulEntity from 'src/common/entity/entity';

@Entity()
export class BaseEntity extends DefaulEntity {
  @Column()
  public readonly _name: string;
  @Column()
  public readonly _email: string;
  @Column()
  public readonly _password: string;
  //   @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) sq nao suporta, depois descomenta
  @Column()
  public readonly _creation_date: Date;
  //   @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) sq nao suporta, depois descomenta
  @Column()
  public readonly _update_date: Date;
  @Column()
  public readonly _type: string;

  constructor(objetc: {
    id: string;
    name: string;
    email: string;
    password: string;
    creation_date: Date;
    update_date: Date;
    type: string;
  }) {
    super(objetc.id);
    this._name = objetc.name;
    this._email = objetc.email;
    this._password = objetc.password;
    this._creation_date = objetc.creation_date;
    this._update_date = objetc.update_date;
    this._type = objetc.type;
  }
}
