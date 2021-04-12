import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateTplDto {
    @ApiProperty({ required: true, description: '模版数据' })
    @IsString({ message: '模版数据需为string类型' })
    @IsNotEmpty({ message: '模版数据不能为空' })
    readonly tplData: string;

    @ApiProperty({ required: true, description: '模版标签' })
    @IsOptional()
    readonly tag?: number;

    @ApiProperty({ required: true, description: '页面标题' })
    @IsString({ message: '必须是字符类' })
    @IsOptional()
    readonly title?: string;

    @ApiProperty({ required: true, description: '是否是首页' })
    @IsOptional()
    readonly homePage?: number;
}