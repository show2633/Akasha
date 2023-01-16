"use strict"

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;

        try{
            const user = await UserStorage.getUserInfo(client.id);

            if (user) {
                if (user.id == client.id && user.psword == client.psword) {
                    return { loginFlag: true };
                }
                return { loginFlag: false, msg: "비밀번호가 다릅니다." };
            }
            return { loginFlag: false, msg: "존재하지 않는 아이디 입니다." };
            
        } catch (err) {
            return { loginFlag: false, err };
        }
    }
}

module.exports = User;