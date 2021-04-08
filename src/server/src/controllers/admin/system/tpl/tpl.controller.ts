import { CacheInterceptor, Controller, Get, HttpCode, HttpStatus, UseInterceptors, Param, Post, Body } from '@nestjs/common';
import { TplEntity } from '@src/entities/model/system/tpl.entity';
import { TplService } from '@src/services/tpl/tpl.service';
import { ApiOperation, ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { CreateTplDto } from './dto/create-tpl.dto'

@ApiTags('模版')
@Controller('tpl')
@UseInterceptors(CacheInterceptor)
export class TplController {
    constructor(private readonly tplService: TplService) { }

    @ApiOperation({ summary: '创建模版', description: '创建模版' })
    @ApiCreatedResponse({
      type: CreateTplDto,
      description: '创建模版DTO'
    })
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createTpl(
      @Body() createTplDto: CreateTplDto
    ): Promise<TplEntity> {
      return await this.tplService.create(createTplDto);
    }

    @ApiOperation({ summary: '获取全部模版信息', description: '全部模版信息' })
    @Get()
    @HttpCode(HttpStatus.OK)
    async getAllTpl(): Promise<TplEntity[]> {
        return await this.tplService.findAll();
    }

    @ApiOperation({ summary: '获取单一模版信息', description: '单一模版信息' })
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getTpl(@Param('id') id: string): Promise<TplEntity> {
        return await this.tplService.findOne(id);
    }
}