import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { Length } from "class-validator";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100, unique: true })
  @Length(4, 100)
  email: string;

  @Column({ type: "varchar", length: 100 })
  @Length(4, 100)
  password: string;

  // include here, any other fields you want to add to the user entity

  // include any foreign key relationships here
}
