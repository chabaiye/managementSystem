// pages/circulate/circulate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabCur:-1,
    mainCur:0,
    activeNames: ['1'],
    goods: [{
      "name":"工具",
      "num":5,
      "goodList":[{
        "name":"钳子类",
        "num":0,
        "underGoodList":[{
          "name":"钳子1",
          "url":"../../img/下载.jpg",
          "num":10
        },{
          "name":"钳子2",
          "url":"../../img/下载.jpg",
          "num":80
        },{
          "name":"钳子3",
          "url":"../../img/下载.jpg",
          "num":80
        },{
          "name":"钳子4",
          "url":"../../img/下载.jpg",
          "num":80
        },{
          "name":"钳子5",
          "url":"../../img/下载.jpg",
          "num":80
        }]
      },{
        "name":"螺刀类",
        "num":1,
        "underGoodList":[{
          "name":"螺刀1",
          "url":"../../img/下载.jpg",
          "num":10
        },{
          "name":"螺刀2",
          "url":"../../img/下载.jpg",
          "num":10
        },{
          "name":"螺刀1",
          "url":"../../img/下载.jpg",
          "num":10
        },{
          "name":"螺刀1",
          "url":"../../img/下载.jpg",
          "num":10
        },{
          "name":"螺刀1",
          "url":"../../img/下载.jpg",
          "num":10
        }]
      }]
    }],
    category:{
      "tools":["钳子类","螺刀类","扳手类","锤子类","专用工具类"],
      "measuring":["机械类","电气类","电子类"],
      "largeEquipment":["飞机","地面设备"],
      "aviation":["机械系统类","电气系统类","电子系统类"],
      "consumables":["航材类","民品类"],
      "dangerous":["易燃易爆类"]    
    }
  },
   onChange(event) {
    this.setData({
      activeNames: event.detail,
      'tabCur':-1
    })
  },
  onClose(e){
    
  },
  onCategory(e){
    console.log("mainCur:"+this.data.activeNames)
    this.setData({
      tabCur:e.currentTarget.dataset.id,
      mainCur:this.data.activeNames
    })
    console.log("tabCur:"+this.data.tabCur);
  },
  tabSelect(e){
    this.setData({
      tabCur: e.currentTarget.dataset.id,
      mainCur: e.currentTarget.dataset.id
    })

  }
})