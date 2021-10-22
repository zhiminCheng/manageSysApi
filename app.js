const express = require('express');
const app = express();

const login = require('./route/login/login');

app.use('/login',login);

app.listen(80);
console.log("服务器启动成功");