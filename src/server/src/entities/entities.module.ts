import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './model/system/user.entity';
import { TagEntity } from './model/system/tag.entity';
import { TplEntity } from './model/system/tpl.entity';
import { RecomTplEntity } from './model/system/recom_tpl.entity';

const entityList = [
    UserEntity,
    TagEntity,
    TplEntity,
    RecomTplEntity
]

@Module({
    imports: [
        TypeOrmModule.forFeature(entityList),
    ],
    exports: [
        TypeOrmModule.forFeature(entityList),
    ],
})
export class EntityModule { }