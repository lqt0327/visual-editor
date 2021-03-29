import { CacheInterceptor, Controller, Get, HttpCode, HttpStatus, UseInterceptors, Param } from '@nestjs/common';
import { TplEntity } from '@src/entities/model/system/tpl.entity';
import { TplService } from '@src/services/tpl/tpl.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('模版')
@Controller('tpl')
@UseInterceptors(CacheInterceptor)
export class TplController {
    constructor(private readonly tplService: TplService) { }

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