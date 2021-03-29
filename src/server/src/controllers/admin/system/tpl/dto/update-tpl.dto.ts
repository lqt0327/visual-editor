import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsArray, IsNumber } from 'class-validator';

export class UpdateTplDto {
    @ApiProperty({ required: true, description: '模版数据' })
    @IsArray({ message: '模版数据需为数组类型' })
    @IsNotEmpty({ message: '模版数据不能为空' })
    readonly tplData: Array<Object>;

    @ApiProperty({ required: true, description: '模版标签' })
    @IsString({ message: '标签不能为空' })
    @IsNotEmpty({ message: '模版标签不能为空' })
    readonly tag: number;
}