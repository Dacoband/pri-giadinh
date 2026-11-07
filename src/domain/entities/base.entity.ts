import{ Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

export abstract class BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @CreateDateColumn({type:'timestamp', name: 'created_at'})
    createAt: Date;
    @UpdateDateColumn({type: 'timestamp', name: 'updated_at'})
    updateAt: Date;
    @Column({ type: 'uuid', name: 'created_by', nullable: true })
    createdBy: string;
    @Column({ type: 'uuid', name: 'updated_by', nullable: true })
    updatedBy: string;
    @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
    deletedAt: Date;
}