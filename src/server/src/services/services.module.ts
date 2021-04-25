import { Module } from '@nestjs/common'
import { EntityModule } from '@src/entities/entities.module'
import { ToolsService } from './tools/tools.service'
import { UsersService } from './admin/users/users.service'
import { TagService } from './admin/tag/tag.service'
import { TplService } from './admin/tpl/tpl.service'
import { RecService } from './admin/recommend/rec.service'
import { LoginService } from './login/login.service'

const serviceList = [
    UsersService,
    ToolsService,
    TagService,
    TplService,
    RecService,
    LoginService
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