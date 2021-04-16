import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gd_recom_tpl')
export class RecomTplEntity {
  @PrimaryGeneratedColumn({
      type:'int',
      name:'id',
      comment:'id'
  })
  id: number;

  @Column('text',{
      nullable:false,
      name: 'tplData',
      comment: '模版数据'
  })
  tplData: string;

  @Column('int',{
    nullable:false,
    name: 'tag',
    comment: '标签'
  })
  tag: number;

  @Column('varchar',{
    nullable:false,
    length:255,
    name: 'title',
    comment: '页面标题'
  })
  title: string;

  @Column('varchar',{
    nullable:false,
    length:255,
    name: 'img_url',
    comment: '缩略图'
  })
  img_url: string;
}
