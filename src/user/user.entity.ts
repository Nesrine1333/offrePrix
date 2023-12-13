import { Bl } from "src/bl/Bl.entity";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;
    
    @Column()
    matriculeFiscale: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    resetCode: number;

   @OneToMany(() => Bl, (bonDeLiv) => bonDeLiv.user)
  bonDeLiv: Bl[];

}
