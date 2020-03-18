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
     // const content = e.currentTarget.dataset.para;  
      //索引
      //const index = e.currentTarget.dataset.index;  
      //数组
      //遍历数组 v是对象，i是遍历索引.
      //强调：，只是不用setData方式不会重新渲染页面而已，
      //官方建议最严谨的做法应该重新拷贝一份数组，用备份数组处理数据
      //let items = this.data.tabs;  此种不推荐，但也可以用

      /*let items = JSON.parse(JSON.stringify(this.data.tabs));//JSON.stringify返回的是json字符串，已经指向了不同的对象，再转为json数组
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
        content:cont
        tabs:items
      });*/

      // this.setData这个方法相当于在data{}数据源中又添加了一份数据，但实际上数据源是从父组件传递过来的，存在于properties中。可以查看
      // Appdata一栏，通过在子组件setData，会在子组件的data{}中添加一份数据，只是子组件的外观变了，但父组件的源数据没改变，因此这种做法不准确
      //导致的问题，我们需要外观与真实的数据同步改变

      //console.log(index);

     //内容
      //等价于  const { para } = e.currentTarget.dataset;  { para }是json对象
      const para = e.currentTarget.dataset.para;
      //索引
      const index = e.currentTarget.dataset.index; 
      //组装回传json对象
      const data = {};
      data["content"] = para;
      data["index"] = index;
      this.triggerEvent("itemsTap", JSON.parse(JSON.stringify(data)));//触发父组件自定义itemstap事件，父组件可以收到回调参数,第一个参数是回调值，第二个是事件选项
      
    }
  }
})
