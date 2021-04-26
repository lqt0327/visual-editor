import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import * as jwt from 'jsonwebtoken';
import LlscwNodeVerify from 'llscw-node-verify'
import { ObjectType } from '@src/types';

@Entity('gd_user')
export class UserEntity {
	@Exclude()
	private llscwNodeVerify: LlscwNodeVerify
	constructor() {
		this.llscwNodeVerify = new LlscwNodeVerify()
	}

	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar', {
		nullable: false,
		length: 255,
		name: 'username',
		comment: '用户名'
	})
	username: string;

	@Exclude()
	@Column('varchar', {
		nullable: false,
		length: 255,
		name: 'password',
		comment: '密码'
	})
	password: string;

	@Column('varchar', {
		nullable: true,
		length: 255,
		name: 'love',
		comment: '感兴趣的标签'
	})
	love: string;

	@Column('varchar', {
		nullable: true,
		length: 255,
		name: 'collect',
		comment: '收藏'
	})
	collect: string;

	/**
	 * @description 插入数据库前先给密码加密
	 */
	@BeforeInsert()
	makePassword() {
		this.password = this.llscwNodeVerify.makePassword(this.password)
	}

	/**
	 * @description 检查密码是否正确
	 * @param password 没有加密的密码
	 * @param sqlPassword 加密了的密码
	 */
	checkPassword(password: string, sqlPassword: string) {
		return this.llscwNodeVerify.checkPassword(password, sqlPassword);
	}

	/**
	 * @description 生产token签名
	 */
	@Expose()
	private get token() {
		const { id, username } = this;
		// 生成签名
		return jwt.sign(
			{
				id,
				username,
			},
			process.env.SECRET, // 加盐
			{
				expiresIn: '7d', // 过期时间
			},
		);
	}

	/**
	 * @description 定义返回数据，用了这个函数后上面的Exclude和Expose就失效了
	 * @param isShowToken 
	 */
	public toResponseObject(isShowToken = true): object {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { llscwNodeVerify, password, token, ...params } = this;
		const responseData: ObjectType = {
			...params,
		}
		if (isShowToken) {
			return Object.assign(responseData, { token });
		} else {
			return responseData;
		}
	}
}
