import { CacheInterceptor, Controller, Get, HttpCode, HttpStatus, UseInterceptors, Param, Post, Body } from '@nestjs/common';
import { RecomTplEntity } from '@src/entities/model/system/recom_tpl.entity';
import { RecService } from '@src/services/recommend/rec.service';
import { ApiOperation, ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { CreateRecDto } from './dto/create-rec.dto'

@ApiTags('推荐模版')
@Controller('recommend')
@UseInterceptors(CacheInterceptor)
export class RecController {
    constructor(private readonly recService: RecService) { }

    @ApiOperation({ summary: '创建推荐模版', description: '创建推荐模版' })
    @ApiCreatedResponse({
      type: CreateRecDto,
      description: '创建推荐模版DTO'
    })
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createTpl(
      @Body() createRecDto: CreateRecDto
    ): Promise<RecomTplEntity> {
      return await this.recService.create(createRecDto);
    }

    @ApiOperation({ summary: '获取全部推荐模版信息', description: '全部推荐模版信息' })
    @Get()
    @HttpCode(HttpStatus.OK)
    async getAllTpl(): Promise<any> {
        return await this.recService.findAll();
    }

    @ApiOperation({ summary: '获取单一推荐模版信息', description: '单一推荐模版信息' })
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getTpl(@Param('id') id: string): Promise<RecomTplEntity> {
        return await this.recService.findOne(id);
    }
}