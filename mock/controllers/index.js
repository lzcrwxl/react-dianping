class Controller {
  async ad(ctx) {
    // 首页 —— 广告（超值特惠）
    var homeAdData = require('../home/ad.js')
    ctx.body = homeAdData
  }
  async city(ctx) {

    // 首页 —— 推荐列表（猜你喜欢）
    var homeListData = require('../home/list.js')
    // 参数
    const params = ctx.params
    console.log(params)
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

    ctx.body = homeListData
  }
  async search(ctx) {
    var searchListData = require('../search/list.js')
    // 参数
    const params = ctx.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)
    console.log('关键字：' + paramsKeyword)

    ctx.body = searchListData
  }
  async category(ctx) {
    // 参数
    var searchListData = require('../search/list.js')
    const params = ctx.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)

    ctx.body = searchListData
  }
  async detailInfo(ctx) {
    const detailInfo = require('../detail/info.js')
    console.log('详情页 - 商户信息')

    const params = ctx.params
    const id = params.id

    console.log('商户id: ' + id)

    ctx.body = detailInfo
  }
  async detailComment(ctx) {
    // 详情页 - 用户评论
    const detailComment = require('../detail/comment.js')

    const params = ctx.params
    const page = params.page
    const id = params.id

    console.log('商户id: ' + id)
    console.log('当前页数: ' + page)

    ctx.body = detailComment
  }
}

module.exports = new Controller()