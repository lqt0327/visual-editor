import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { LoginService } from '@src/services/login/login.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('用户登录')
@Controller('admin/login')
export class LoginController {
  constructor (
    private loginService: LoginService,
  ) { }

  @ApiOperation({
    summary: '用户登录',
    description: '用户名可以是手机号码、邮箱、用户名',
  })
  @ApiCreatedResponse({
    type: LoginDto,
    description: '用户登录DTO'
  })
  @Post()
  async adminLogin(
    @Body() loginDto: LoginDto,
  ): Promise<any> {
    return this.loginService.adminLogin(loginDto);
  }
}
