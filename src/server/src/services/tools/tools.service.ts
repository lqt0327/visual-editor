import { Injectable } from '@nestjs/common';
import { isUUID, isEmail, isInt, isMobilePhone } from 'class-validator';
import * as uuidv4 from 'uuid'
import LlscwNodeVerify from 'llscw-node-verify'

@Injectable()
export class ToolsService {
    private llscwNodeVerify: LlscwNodeVerify;
    constructor() {
        this.llscwNodeVerify = new LlscwNodeVerify()
    }

    public get uuid(): string {
        return uuidv4.v4();
    }

    /**
     * @description 判断是否为uuid
     * @param id 
     */
    public isUUID(id: string): boolean {
        return isUUID(id);
    }

    public isInt(id: string): boolean {
        return isInt(Number(id));
    }

    public isEmail(str: string): boolean {
        return isEmail(str);
    }

    public isMobilePhone(mobile: string, nation: any = 'zh-CN'): boolean {
        return isMobilePhone(mobile, nation);
    }

    /**
     * @description 生成密文的方法
     * @param password 明文密码
     */
    makePassword(password: string): string {
        return this.llscwNodeVerify.makePassword(password);
    }

    /**
	 * @description 检查密码是否正确
	 * @param password 没有加密的密码
	 * @param sqlPassword 加密了的密码
	 */
    checkPassword(password: string, sqlPassword: string): boolean {
        return this.llscwNodeVerify.checkPassword(password, sqlPassword);
    }
}