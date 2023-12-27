import { Bl } from "src/bl/Bl.entity";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    matriculeFiscale: string;
    @Column()
    email: string;
    @Column()
    name: string;
    @Column()
    password: string;
    @Column({ nullable: true })
    resetCode: number;

    @Column()
    role:string;

   @OneToMany(() => Bl, (bonDeLiv) => bonDeLiv.user)
  bonDeLiv: Bl[];

}