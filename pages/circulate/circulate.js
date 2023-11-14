// pages/circulate/circulate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
        }]
      }]
    }]
  },
   onChange(event) {
    this.setData({
      activeNames: event.detail,
    })
  }
})