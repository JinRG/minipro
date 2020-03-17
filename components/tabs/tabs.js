// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   * 从父组件传递过来的数据
   */
  properties: {
    content:{
      type:String,
      value:""
    },
    tabs:{
      //类型，描述数据类型
      type:Array,
      //value，设置默认值
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // content:"首页内容",
    // tabs:[
    //   {id:0,tabs_title:"首页",isActive:true,tabs_content:"首页内容"},
    //   { id:1,tabs_title: "商品", isActive: false, tabs_content: "商品内容" },
    //   { id:2,tabs_title: "订单",isActive: false, tabs_content: "订单内容" },
    //   { id:3,tabs_title: "我的", isActive: false, tabs_content: "个人中心" }
    // ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //处理点击tabs时切换到不同页面
    //遍历所有的item将active 置为false
    //将当前点击的item设置为active
    handlerTapsTap(e) {
      //内容
      const content = e.currentTarget.dataset.para;  
      //索引
      const index = e.currentTarget.dataset.index;  
      //数组
      //遍历数组 v是对象，i是遍历索引.
      //强调：遍历数组修改的时候会使得原数组被修改，只是不用setData方式不会重新渲染页面而已，因此最严谨的做法应该重新拷贝一份数组再遍历
      //let items = this.data.tabs; 
      let items = JSON.parse(JSON.stringify(this.data.tabs));
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
        content:content,
        tabs:items
      });
    }
  }
})
