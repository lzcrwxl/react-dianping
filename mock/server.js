const Koa = require('koa');

const app = new Koa();
const router = require('./router')


// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(8080);