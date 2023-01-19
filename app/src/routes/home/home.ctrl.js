"use strict";

const User = require("../../models/User");
// const UserStorage = require("../../models/UserStorage");
// const logger = require("../../config/logger");

const output = {
    home: (req, res) => {
        // logger.info(`GET / 304 "홈 화면으로 이동"`);
        res.render("home/index", { cookies: JSON.stringify(req.cookies) });
        console.log(JSON.stringify(req.cookies));
    },
    
    login: (req, res) => {
        // logger.info(`GET /login 304 "로그인 화면으로 이동"`);
        res.render("home/login");
    },

    register: (req, res) => {
        // logger.info(`GET /register 304 "회원가입 화면으로 이동"`);
        res.render("home/register");
    }
};

const process = {
    login: async(req, res) => {
        const user = new User(req.body);
        const response = await user.login();

        res.cookie("user", req.body.id, {
            expires: new Date(Date.now() + 600000),
            httpOnly: true
        });

        return res.json(response);
    },

    logout: (req, res) => {
        res.clearCookie("user");

        return res.json({ success: true });
    },

    register: async(req, res) => {
        const user = new User(req.body);
        const response = await user.register();

        return res.json(response);
    }
}

module.exports = {
    output,
    process,
};