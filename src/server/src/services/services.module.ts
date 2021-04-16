import { Module } from '@nestjs/common'
import { EntityModule } from '@src/entities/entities.module'
import { ToolsService } from './tools/tools.service'
import { UsersService } from './users/users.service'
import { TagService } from './tag/tag.service'
import { TplService } from './tpl/tpl.service'
import { RecService } from './recommend/rec.service'

const serviceList = [
    UsersService,
    ToolsService,
    TagService,
    TplService,
    RecService
]

@Module({
    imports: [
        EntityModule,
    ],
    providers: [
        ...serviceList
    ],
    exports: [
        ...serviceList
    ]
})
export class ServicesModule { }