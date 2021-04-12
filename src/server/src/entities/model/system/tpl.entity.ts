import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gd_tpl')
export class TplEntity {
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
    // default: () => '绫罗',
    // length:30,
    name: 'uid',
    comment: '用户id'
  })
  uid: number;

  @Column('int',{
    nullable:false,
    // length:255,
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

  @Column('int', {
    nullable: false,
    default: () => 0,
    name: 'homePage',
    comment: '是否是首页'
  })
  homePage: number
}
