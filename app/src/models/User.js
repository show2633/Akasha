"use strict"

const UserStorage = require("./UserStorage");
const crypto = require("crypto");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;

        try{
            const user = await UserStorage.getUserInfo(client.id);

            if (user) {

                const hashPassword = crypto.createHash('sha512').update(client.psword).digest('hex');

                if (user.id == client.id && user.psword == hashPassword) {
                    return { success: true };
                }
                return { success: false, msg: "비밀번호가 다릅니다." };
            }
            return { success: false, msg: "존재하지 않는 아이디 입니다." };
            
        } catch (err) {
            return { success: false, err };
        }
    }

    async register() {
        const client = this.body;

        try{ 
            const response = await UserStorage.save(client);
            return response;
        } catch(err) {
            return { success: false, err };
        }
    }
}

module.exports = User;