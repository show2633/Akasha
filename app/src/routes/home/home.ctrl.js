"use strict";

const User = require("../../models/User");

// const User = require("../../models/User");
// const UserStorage = require("../../models/UserStorage");
// const logger = require("../../config/logger");

const output = {
    home: (req, res) => {
        // logger.info(`GET / 304 "홈 화면으로 이동"`);
        res.render("home/main");
    },
    
    login: (req, res) => {
        // logger.info(`GET /login 304 "로그인 화면으로 이동"`);
        res.render("home/login");
    },

    // register: (req, res) => {
    //     logger.info(`GET /register 304 "회원가입 화면으로 이동"`);
    //     res.render("home/register");
    // }
};

const process = {
    login: async(req, res) => {
        const user = new User(req.body);
        const response = await user.login();

        return res.json(response);
    }
}

module.exports = {
    output,
    process,
};