"use strict"

const app = require("../app");
// const logger = require("../src/config/logger");
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;

app.listen(PORT, () => {
    // logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
    console.log(`${PORT} 포트에서 서버가 가동되었습니다.`);
});