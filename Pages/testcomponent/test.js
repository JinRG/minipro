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
  
  handleItemTap(e){
    //console.log(e); //{index} 代表一个json对象，也可以直接取出里面的index变量表示index的value值
    const {index} = e.detail;
    const  {content} = e.detail;
    let items = JSON.parse(JSON.stringify(this.data.tabs));//JSON.stringify返回的是json字符串，已经指向了不同的对象，再转为json数组
      items.forEach((v,i)=>{
        if(v.id===index){//
           v.isActive = true;
           this.setData({
             content: content
           });
        }else{
           v.isActive = false;
        }

      });
      this.setData({
        tabs:items
      });
    
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