import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository, getManager, EntityManager } from 'typeorm';
import { CreateTplDto } from '@src/controllers/admin/system/tpl/dto/create-tpl.dto';
import { UpdateTplDto } from '@src/controllers/admin/system/tpl/dto/update-tpl.dto';
import { TagEntity } from '@src/entities/model/system/tag.entity';
import { TplEntity } from '@src/entities/model/system/tpl.entity';
import { UserEntity } from '@src/entities/model/system/user.entity'

@Injectable()
export class TplService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
    @InjectRepository(TplEntity)
    private readonly tplRepository: Repository<TplEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}
  
/**
 * @Author: llscw
 * @Date: 2021-3-30
 * @LastEditor: llscw
 * @description: 添加模版
 * @param {type}
 * @return:
 */
  async create(createTplDto: CreateTplDto): Promise<TplEntity> {
    // try{
    //   let { tplData, uid, tag } = createTplDto
    //   return getManager().transaction(async (entityManager: EntityManager) => {
    //     await entityManager.save(TplEntity, { tplData, uid, tag})
    //   }).then(async () => {
    //     return '创建成功'
    //   }).catch(e => {
    //     console.log('创建模版', e)
    //     throw new HttpException('创建失败', HttpStatus.OK)
    //   })
    // }catch(e) {
    //   Logger.error(e,'tpl.service');
    //   throw new HttpException(e, HttpStatus.OK)
    // }
    const tpl = new TplEntity();
    tpl.tplData = createTplDto.tplData;
    tpl.uid = createTplDto.uid;
    tpl.tag = createTplDto.tag;
    tpl.title = createTplDto.title;
    tpl.homePage = createTplDto.homePage;

    return this.tplRepository.save(tpl);
  }

  async update(id: number, data: UpdateTplDto): Promise<string> {
    // const tpl = new TplEntity();
    const { raw: { affectedRows } } = await this.tplRepository.update({ id }, data);
    console.log(affectedRows,'??????xxxxx')
    if (affectedRows) {
      return '修改成功';
    } else {
      throw new HttpException(`传递的id:${id},修改数据失败`, HttpStatus.OK);
    }

  }

  async findAll(): Promise<TplEntity[]> {
    return await this.tplRepository.find();
  }

  async findOne(id: string): Promise<TplEntity> {
    return await this.tplRepository.findOne({
      where: { id: id}
    })
  }

  async tplList(id: string): Promise<any> {
    const tplList = await getConnection().createQueryBuilder(TplEntity,'tpl')
      .innerJoin(TagEntity, 'tag', 'tag.id=tpl.tag')
      // .innerJoin(UserEntity, 'user', )
      .select(['tpl.id','tpl.tplData','tpl.uid','tpl.title','tpl.homePage','tag.tagname'])
      .where('tpl.uid=:id',{id})
      .getRawMany()
    return tplList;
  }

  async remove(id: string): Promise<void> {
    await this.tplRepository.delete(id);
  }
}
