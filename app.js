App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("onLanuch"); 
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log("onShow");//第一次进入页面或者从其他后台切回来的时候，比如跳转到app，然后app回到小程序
  },

  /**
   * 当小程序从前台进入后台，当前小程序会被遮挡，会触发 onHide
   * 
   * 常用：因为都跳转到其他后台了，因此我们可以暂停小程序定时器或清除定时器节省系统资源
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息，入口页面找不到不会报错
   * 常用：
   * 同步请求后台，发送错误信息
   * 
   */
  onError: function (msg) {
    console.log("onError");
  },
 //找不到启动小程序第一次加载入口页面的时候触发，
 //适用场景：找不到入口页面再跳转另外一个入口页面
  onPageNotFound(){
    //console.log("onPageNotFound");
    //跳转无法跳转底部//app.js里面跳转页面需要加延时器才能跳转
    setTimeout(function(){
     wx.navigateTo({
       url: '/Pages/about/about',
     })
    },1000);

  }
})
