import { CacheInterceptor, Controller, Get, HttpCode, HttpStatus, UseInterceptors } from '@nestjs/common';
import { TagEntity } from '@src/entities/model/system/tag.entity';
import { TagService } from '@src/services/admin/tag/tag.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('标签')
@Controller('tag')
@UseInterceptors(CacheInterceptor)
export class TagController {
    constructor(private readonly tagService: TagService) { }

    @ApiOperation({ summary: '获取标签信息', description: '标签信息' })
    @Get()
    @HttpCode(HttpStatus.OK)
    async getTag(): Promise<TagEntity[]> {
        return await this.tagService.findAll();
    }
}
