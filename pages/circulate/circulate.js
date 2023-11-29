// pages/circulate/circulate.js

Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    stepperValue:0,
    tabCur:-1,
    mainCur:0,
    activeNames: ['1'],
    show: false,
    actions: [
      { name: '获取用户信息', color: '#07c160', openType: 'getUserInfo' },
    ],
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
    },{
      "name":"量具",
      "num":3,
      "goodList":[{
        "name":"机械类",
        "num":4,
        "underGoodList":[{
          "name":"机械1",
          "url":"../../img/下载.jpg",
          "num":1
        }]
      }]
    },{
      "name":"大型设备",
      "num":2,
      "goodList":[{
        "name":"飞机",
        "num":0,
        "underGoodList":[{
          "name":"飞机1",
          "url":"../../img/下载.jpg",
          "num":1
        },{
          "name":"飞机1",
          "url":"../../img/下载.jpg",
          "num":1
        },{
          "name":"飞机1",
          "url":"../../img/下载.jpg",
          "num":1
        },{
          "name":"飞机1",
          "url":"../../img/下载.jpg",
          "num":1
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
    },
    selected:[{
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
    },{
      "name":"量具",
      "num":3,
      "goodList":[{
        "name":"机械类",
        "num":4,
        "underGoodList":[{
          "name":"机械1",
          "url":"../../img/下载.jpg",
          "num":1
        }]
      }]
    },{
      "name":"大型设备",
      "num":2,
      "goodList":[{
        "name":"飞机",
        "num":0,
        "underGoodList":[{
          "name":"飞机1",
          "url":"../../img/下载.jpg",
          "num":1
        },{
          "name":"飞机1",
          "url":"../../img/下载.jpg",
          "num":1
        },{
          "name":"飞机1",
          "url":"../../img/下载.jpg",
          "num":1
        },{
          "name":"飞机1",
          "url":"../../img/下载.jpg",
          "num":1
        }]
      }]
    }],
  },
   onChange(event) {
    this.setData({
      activeNames: event.detail,
      'tabCur':-1
    })
  },
  // 遮罩层
  sheetClose() {
    this.setData({ show: false });
    let actionTemp = this.data.selected
    let actionFinal = this.data.goods
    // 初始化actionFinal
    for (let i = 0; i < actionTemp.length; i++) {
      for (let p = 0; p < actionTemp[i].goodList.length; p++) {
        actionFinal[i].goodList[p].underGoodList = []    
      }
    }
    // 若selectedNum存在，则增加到actionFinal
    for (let i = 0; i < actionTemp.length; i++) {
      for (let p = 0; p < actionTemp[i].goodList.length; p++) {
        for (let n = 0; n < actionTemp[i].goodList[p].underGoodList.length; n++) {
          if (actionTemp[i].goodList[p].underGoodList[n].selectedNum>=0) {         
            actionFinal[i].goodList[p].underGoodList = actionFinal[i].goodList[p].underGoodList.concat(actionTemp[i].goodList[p].underGoodList[n])
          }
        }      
      }
    }
    // 更新action
    this.setData({
      actions:actionFinal
    })
    console.log(this.data.actions);
  },
  test(){
    console.log(this.data.selected);
  },
  showSheet(e){
    this.setData({
      show: true
    });
    let actionTemp = this.data.selected
    let actionFinal = this.data.goods
    // 初始化actionFinal
    for (let i = 0; i < actionTemp.length; i++) {
      for (let p = 0; p < actionTemp[i].goodList.length; p++) {
        actionFinal[i].goodList[p].underGoodList = []    
      }
    }
    // 若selectedNum存在，则增加到actionFinal
    for (let i = 0; i < actionTemp.length; i++) {
      for (let p = 0; p < actionTemp[i].goodList.length; p++) {
        for (let n = 0; n < actionTemp[i].goodList[p].underGoodList.length; n++) {
          if (actionTemp[i].goodList[p].underGoodList[n].selectedNum>=0) {         
            actionFinal[i].goodList[p].underGoodList = actionFinal[i].goodList[p].underGoodList.concat(actionTemp[i].goodList[p].underGoodList[n])
          }
        }      
      }
    }
    // 更新action
    this.setData({
      actions:actionFinal
    })
    console.log(this.data.actions);
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
  },
  // 步进器加
  stepperPlus(){
    this.setData({
      stepperValue: this.data.stepperValue + 1
    })
  },
  // 步进器减
  stepperMinus(){
    this.setData({
      stepperValue: this.data.stepperValue - 1
    })
  },
  // 购物车
  stepperChanges(e){
    // 为selected赋值
    var selectedTemp = this.data.selected
    let item = e.currentTarget.id.split('-')
    for (let i = 0; i < item.length; i++) {
      item[i] = Number(item[i])
    }
    let num = {
      "selectedNum":e.detail
    }
    console.log("e.detail:");
    console.log(e.detail);
    if (e.detail==0) {
      console.log("执行了第一条");
      delete selectedTemp[item[0]].goodList[item[1]].underGoodList[item[2]].selectedNum
      console.log(selectedTemp[item[0]].goodList[item[1]].underGoodList[item[2]]);
    }
    if (e.detail!=0) {
      console.log("执行了第二条");
      const temp =  Object.assign({}, selectedTemp[item[0]].goodList[item[1]].underGoodList[item[2]], num);
      selectedTemp[item[0]].goodList[item[1]].underGoodList[item[2]] = temp
    }
    
    this.setData({
      selected:selectedTemp,
    })
    console.log("in steeperChange selected:");
    console.log(this.data.selected);
  },
  goLendTab(e){
    // 更新actions
    this.showSheet()
    // 将当前actions存入缓存
    wx.setStorageSync('actions', this.data.actions)
    
    // 前往lendTab页
    wx.navigateTo({
      url: '../lendTab/lendTab',
    })
  }
})