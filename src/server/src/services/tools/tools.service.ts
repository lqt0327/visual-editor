import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { isUUID, isEmail, isInt, isMobilePhone } from 'class-validator';
import * as uuidv4 from 'uuid'
import random from './random'
var CryptoJS = require("crypto-js");

@Injectable()
export class ToolsService {
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
    public makePassword(password: string): string {
        // 1.生成随机数
        const randomStr = random()
        // 2.对生成的随机数base64加密
        const base64RandomStr = CryptoJS.Base64.stringify(randomStr)
        return this.md5MakePassword(base64RandomStr, password);
    }

    /**
     * @description 判断与密文密码是否匹配
     * @param password 没有加密的密码
     * @param sqlPwd 加密了的密码
     */
    public checkPassword(password: string, sqlPwd: string): boolean {
        // 1.从查询出来的密码中截取前面随机数
        const base64RandomStr = sqlPwd.substring(0, 16);
        const lastPwd = this.md5MakePassword(base64RandomStr, password);
        // console.log(sqlPwd,'[[[[[[[',lastPwd,';;;;;',typeof sqlPwd, typeof lastPwd,sqlPwd === lastPwd)
        return sqlPwd === lastPwd;
    }

    /**
     * @description 对密码进行md5加密
     * @param base64RandomStr base64加密的随机数
     * @param password 没有加密的密码
     */
    private md5MakePassword(base64RandomStr: string, password: string): string {
        // 2.将密码与加密的随机数拼接
        const newPwd = base64RandomStr + password;
        // 3.将第二步进行md5加密
        const md5Pwd = CryptoJS.hmacSHA512(newPwd, "llscw");
        // 4.将加密后的md5Pwd继续加密
        const base64Md5 = CryptoJS.Base64.stringify(md5Pwd);
        // 5.继续将2和4拼接
        const lastPwd = base64RandomStr + base64Md5;
        return lastPwd;
    }
}