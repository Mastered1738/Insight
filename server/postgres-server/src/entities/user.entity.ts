import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserType } from './userType.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne((type) => UserType, (userType) => userType.user_type_id)
  user_type: UserType;
}
