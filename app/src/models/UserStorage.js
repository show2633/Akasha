"use strict"

const crypto = require("crypto");
const db = require("../config/db");
const User = require("./User");

class UserStorage {
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = `SELECT id FROM users where id = ?;`;
            const hashPassword = crypto.createHash('sha512').update(userInfo.psword).digest('hex');
         
            db.query(query, [userInfo.id], (err, data) => {
                if (err) reject(`${err}`);
                else {
                    if (data.length == 0) {
                        const sql = {
                            id: userInfo.id,
                            psword: hashPassword,
                            name: userInfo.name,
                            email: userInfo.email,
                        }

                        const query = `INSERT INTO users SET ?;`;
                        db.query(query, [sql], (err, rows) => {
                            if (err) reject(`${err}`);
                            else resolve({ success: true });
                        });
                    }

                    else {
                        reject( {success: false, msg: "이미 존재하는 ID 입니다"} );
                    }
                }
            })
        })
    }
}

module.exports = UserStorage;