// entities/User.ts
import { Entity, PrimaryGeneratedColumn, Column,BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false, type: 'text' })
  username!: string;

  @Column({ nullable: false })
  password!: string;
}
