// pages/user_me/user_me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "user":{
      "userName":"",
      'userPhoto':'../../img/下载.jpg'
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad(options) {

  // },
  login(){
    wx.navigateTo({
      url: '../logIn/logIn',
    })
  },
  // loginOut(){
  //   this.setData({
  //     'user':''
  //   })
  //   wx.setStorageSync('user', '')
  // },
  // gotoHistory(){
  //   let that = this;
  //   wx.navigateTo({
  //     url: '/pages/user_history/user_history',
  //   })
  // },
  // gotoModify(){
  //   wx.navigateTo({
  //     url: '/pages/user_modify/user_modify',
  //   })
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
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