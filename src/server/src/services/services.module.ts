import { Module } from '@nestjs/common'
import { EntityModule } from '@src/entities/entities.module'
import { ToolsService } from './tools/tools.service'
import { UsersService } from './users/users.service'
import { LinkService } from './links/links.service'
import { LoginService } from './login/login.service'
import { CommentsService } from './comments/comments.service'
import { ReplyService } from './reply/reply.service'
import { ArticleService } from './article/article.service'
import { CateService } from './cate/cate.service'

const serviceList = [
    UsersService,
    LinkService,
    LoginService,
    ToolsService,
    CommentsService,
    ReplyService,
    ArticleService,
    CateService
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