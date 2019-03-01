const router = require('koa-router')();
const ctrl = require('./controllers/index'); // 引入用户模块逻辑层

router
  .get('/api/homead',ctrl.ad)
  .get('/api/homelist/:city/:page', ctrl.city)
  .get('/api/search/:page/:city/:category/:keyword',ctrl.search)
  .get('/api/search/:page/:city/:category',ctrl.category)
  .get('/api/detail/info/:id',ctrl.detailInfo)
  .get('/api/detail/comment/:page/:id',ctrl.detailComment)
module.exports = router