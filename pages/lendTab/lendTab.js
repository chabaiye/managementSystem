// pages/lendTab/lendTab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    actions:[],
    loaned:[]
  },
  onChange(e){
    console.log(e.detail);
  },
  onClickLeft(){
    wx.navigateBack({
      delta: 0,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    let actionsTemp = wx.getStorageSync('actions')
    this.setData({
      'actions':actionsTemp
    })
  },
  order(){
    // 显示成功下单提示
    wx.showToast({
      title: '成功下单',
    })
    // 将actions抽象成一个一维数组
    let loanedTemp = this.data.loaned
    for (let i = 0; i < this.data.actions.length; i++) {
      for (let p = 0; p <this.data.actions[i].goodList.length; p++) {
        for (let n = 0; n < this.data.actions[i].goodList[p].underGoodList.length; n++) {
          // if (actionTemp[i].goodList[p].underGoodList[n].selectedNum>=0) {           
          //   actionFinal[i].goodList[p].underGoodList = actionFinal[i].goodList[p].underGoodList.concat(actionTemp[i].goodList[p].underGoodList[n])
          // }
          let firstName = {
            "firstName":this.data.actions[i].name
          }
          let secondName ={
            "secondName":this.data.actions[i].goodList[p].name
          }
          let a = Object.assign({},firstName,secondName)
          let b = Object.assign({},a,this.data.actions[i].goodList[p].underGoodList[n])
          loanedTemp = loanedTemp.concat(b)
        }   
      }
    }
    // 以追加的形式添加到loaned数组里
    this.setData({
      loaned:loanedTemp,
      actions:0
    })
    console.log(this.data.loaned);
    // 把actions设为空（0）
    wx.setStorageSync('actions', '')
  },
  cancel(){
    wx.showToast({
      title: '取消成功',
    })
    wx.navigateBack({
      delta: 0,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})