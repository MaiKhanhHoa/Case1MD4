import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({type: 'int'})
    public idU: number;
    @Column({type: 'varchar'})
    public nameU: string;
    @Column({type: 'varchar'})
    public password: string;
}