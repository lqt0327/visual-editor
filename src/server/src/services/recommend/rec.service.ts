import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { CreateRecDto } from '@src/controllers/admin/system/recommend/dto/create-rec.dto';
import { TagEntity } from '@src/entities/model/system/tag.entity';
import { RecomTplEntity } from '@src/entities/model/system/recom_tpl.entity';

@Injectable()
export class RecService {
  constructor(
    @InjectRepository(RecomTplEntity)
    private readonly recomTplRepository: Repository<RecomTplEntity>,
  ) {}
  
/**
 * @Author: llscw
 * @Date: 2021-3-30
 * @LastEditor: llscw
 * @description: 添加模版
 * @param {type}
 * @return:
 */
  async create(createRecDto: CreateRecDto): Promise<RecomTplEntity> {
    const rec = new RecomTplEntity();
    rec.tplData = createRecDto.tplData;
    rec.img_url = createRecDto.img_url;
    rec.tag = createRecDto.tag;
    rec.title = createRecDto.title;

    return this.recomTplRepository.save(rec);
  }

  async findAll(): Promise<any> {
    const recList = await getConnection().createQueryBuilder(RecomTplEntity,'rec')
      .innerJoin(TagEntity, 'tag', 'tag.id=rec.tag')
      .select(['rec.id','rec.tplData','rec.title','tag.tagname','rec.img_url'])
      .getRawMany()
      const map = {}
      for(let v of recList) {
        if(map[v["tag_tagname"]]) {
          map[v["tag_tagname"]].push({
            "id": v["rec_id"],
            "title": v["rec_title"],
            "tplData": v["rec_tplData"],
            "img_url": v["rec_img_url"]
          })
        }else{
          map[v["tag_tagname"]] = [{
            "id": v["rec_id"],
            "title": v["rec_title"],
            "tplData": v["rec_tplData"],
            "img_url": v["rec_img_url"]
          }]
        }
      }

    return map;
  }

  async findOne(id: string): Promise<RecomTplEntity> {
    return await this.recomTplRepository.findOne({
      where: { id: id}
    })
  }

  async recList(id: string): Promise<any> {
    const recList = await getConnection().createQueryBuilder(RecomTplEntity,'rec')
      .innerJoin(TagEntity, 'tag', 'tag.id=rec.tag')
      .select(['rec.id','rec.tplData','rec.title','tag.tagname','rec.img_url'])
      .where('rec.uid=:id',{id})
      .getRawMany()
    return recList;
  }
}
