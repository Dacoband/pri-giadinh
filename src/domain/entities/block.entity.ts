import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Cell } from "./cell.entity";
import { BlockType } from "../enums/block-type.enum";
import { SecurityLevel } from "../enums/security-level.enum";

@Entity('blocks')
export class Block extends BaseEntity{
    @Column({unique: true, length: 50})
    code: string
    @Column()
    name: string;
    @Column({type: 'enum', enum: BlockType})
    type: BlockType
    @Column({ type: 'enum', enum: SecurityLevel, default: SecurityLevel.MEDIUM })
    securityLevel: SecurityLevel;
    @OneToMany(() => Cell, (cell) => cell.block)
    cells: Cell[];
}