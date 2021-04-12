import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateTplDto {
    @ApiProperty({ required: true, description: '模版数据' })
    @IsString({ message: '模版数据需为string类型' })
    @IsNotEmpty({ message: '模版数据不能为空' })
    readonly tplData: string;

    @ApiProperty({ required: true, description: '模版标签' })
    @IsNotEmpty({ message: '模版标签不能为空' })
    readonly tag: number;

    @ApiProperty({ required: true, description: '页面标题' })
    @IsString({ message: '页面标题需为string类型' })
    @IsNotEmpty({ message: '页面标题不能为空' })
    readonly title: string;

    @ApiProperty({ required: true, description: '是否是首页' })
    @IsNotEmpty({ message: '判断是否是首页的标识符，不能为空' })
    readonly homePage: number;
}