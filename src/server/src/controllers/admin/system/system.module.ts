import { Module, CacheModule } from '@nestjs/common';
import { ServicesModule } from '@src/services/services.module';
import { UsersController } from './users/users.controller'
import { TagController } from './tag/tag.controller'
import { TplController } from './tpl/tpl.controller'
import { RecController } from './recommend/rec.controller'
import { LoginController } from './login/login.controller'

@Module({
  imports: [
    CacheModule.register(),
    ServicesModule,
  ],
  controllers: [
    UsersController,
    TagController,
    TplController,
    RecController,
    LoginController
  ],
})
export class SystemModule { }