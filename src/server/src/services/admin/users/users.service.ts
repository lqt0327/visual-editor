import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '@src/controllers/admin/system/users/dto/create-user.dto';
import { UserEntity } from '@src/entities/model/system/user.entity';
import { ToolsService } from '@src/services/tools/tools.service'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
    private readonly toolsService: ToolsService,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<string> {
    try {
      const user = new UserEntity();
      const { username, password, love, collect } = createUserDto
      const verify = await this.usersRepository.findOne({
        where: { username }
      })
      if (verify) {
        throw new HttpException(`${username}角色已经存在不能重复添加`, HttpStatus.OK)
      }
      user.username = username;
      user.password = password;
      user.love = love;
      user.collect = collect;
      await this.usersRepository.save(user);
      return '创建成功';
    } catch (e) {
      throw new HttpException(e, HttpStatus.OK)
    }
  }

  async findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<UserEntity> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
