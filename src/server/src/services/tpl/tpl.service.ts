import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { CreateTplDto } from '@src/controllers/admin/system/tpl/dto/create-tpl.dto';
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

  create(createTplDto: CreateTplDto): Promise<TplEntity> {
    const tpl = new TplEntity();
    tpl.tplData = createTplDto.tplData;
    tpl.uid = createTplDto.uid;
    tpl.tag = createTplDto.tag;

    return this.tplRepository.save(tpl);
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
      .select(['tpl.id','tpl.tplData','tpl.uid','tag.tagname'])
      .where('tpl.uid=:id',{id})
      .getRawMany()
    return tplList;
  }

  async remove(id: string): Promise<void> {
    await this.tplRepository.delete(id);
  }
}
