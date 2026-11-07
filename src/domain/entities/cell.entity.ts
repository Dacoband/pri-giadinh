import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Block } from "./block.entity";
import { Prisoner } from "./prisoner.entity";

@Entity('cells')
export class Cell extends BaseEntity{
    @Column({ unique: true, length: 50 })
    code: string;

    @Column({ type: 'int', default: 0 })
    capacity: number;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;
    @ManyToOne(() => Block, (block) => block.cells)
    @JoinColumn({ name: 'blockId' })
    block: Block;
    @Column({ type: 'uuid' })
    blockId: string;
    @OneToMany(() => Prisoner, (prisoner) => prisoner.cell)
    prisoners: Prisoner[];
}