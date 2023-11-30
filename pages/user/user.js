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
    "userData":0
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
  loginOut(){
    this.setData({
      'userData':0
    })
    wx.setStorageSync('user', 0)
  },
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
    let user = wx.getStorageSync('user')
    this.setData({
      userData:user
    })
    console.log(this.data.userData);
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