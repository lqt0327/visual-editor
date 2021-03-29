import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gd_tag')
export class TagEntity {
  @PrimaryGeneratedColumn({
      type:'int',
      name:'id',
      comment:'id'
  })
  id: number;

  @Column('varchar',{
    nullable:false,
    length:255,
    name: 'tagname',
    comment: '关键词'
  })
  tagname: string;
}
