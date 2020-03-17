// Pages/testcomponent/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   content:"首页内容",
    tabs:[
      {id:0,tabs_title:"首页",isActive:true,tabs_content:"首页内容"},
      { id:1,tabs_title: "商品", isActive: false, tabs_content: "商品内容" },
      { id:2,tabs_title: "订单",isActive: false, tabs_content: "订单内容" },
      { id:3,tabs_title: "我的", isActive: false, tabs_content: "个人中心" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})