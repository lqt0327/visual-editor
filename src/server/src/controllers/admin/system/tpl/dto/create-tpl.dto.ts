import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTplDto {
    @ApiProperty({ required: true, description: '模版数据' })
    @IsString({ message: '模版数据需为string类型' })
    @IsNotEmpty({ message: '模版数据不能为空' })
    readonly tplData: string;

    @ApiProperty({ required: true, description: '用户id' })
    @IsNotEmpty({ message: '用户id不能为空' })
    readonly uid: number;

    @ApiProperty({ required: true, description: '模版标签' })
    @IsNotEmpty({ message: '模版标签不能为空' })
    readonly tag: number;
}