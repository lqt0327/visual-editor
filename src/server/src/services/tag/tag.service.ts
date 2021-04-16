import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { CreateTagDto } from '@src/controllers/admin/system/tag/dto/create-tag.dto';
import { TagEntity } from '@src/entities/model/system/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>
  ) {}

  create(createTagDto: CreateTagDto): Promise<TagEntity> {
    const tag = new TagEntity();
    tag.tagname = createTagDto.tagname;

    return this.tagRepository.save(tag);
  }

  async findAll(): Promise<TagEntity[]> {
    return await this.tagRepository.find();
  }

//   async tagList(id: string): Promise<any> {
//     const cateList = await getConnection().createQueryBuilder(TagEntity,'c')
//       .innerJoin(ArticleEntity, 'a', 'a.cateid=c.id')
//       .select(['a.id','a.time','a.title','c.catename'])
//       .where('a.cateid=:id',{id})
//       .getRawMany()
//     return cateList;
//   }

  async remove(id: string): Promise<void> {
    await this.tagRepository.delete(id);
  }
}
