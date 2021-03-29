import { Module, CacheModule } from '@nestjs/common';
import { ServicesModule } from '@src/services/services.module';
import { UsersController } from './users/users.controller'
// import { LoginController } from './login/login.controller'
import { TagController } from './tag/tag.controller'
import { TplController } from './tpl/tpl.controller'

@Module({
  imports: [
    CacheModule.register(),
    ServicesModule,
  ],
  controllers: [
    UsersController,
    // LoginController,
    TagController,
    TplController
  ],
})
export class SystemModule { }