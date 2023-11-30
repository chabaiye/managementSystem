// pages/logIn/logIn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'accNumber':0,
    'passWord':0,
    'code':'0e1TWgml2gabrc4ayvnl2rnShw1TWgm7'
    
  },
  getAccountNumber(e){
    this.setData({
      'accNumber':e.detail.value
    })
  },
  getPassword(e){
    this.setData({
      'passWord':e.detail.value
    })
  },
  onClickLeft() {
    wx.navigateBack({
      delta: 0,
      success: (res) => {
        console.log("back success");
      },
    })
  },

  logIn(){
    let that = this
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          console.log(res.code);
          that.setData({
            code:res.code
          })
          
          wx.request({
            url: 'http://119.145.71.191/prod-api/api/wxLogin',
            data: {
              code: that.data.code,
              xgh:that.data.accNumber,
              password:that.data.passWord
            },
            method:"POST",
            success(e){
              console.log(e.data);
              console.log(that.data.code);
              console.log(that.data.accNumber);
              console.log(that.data.passWord);
              wx.setStorageSync('user',e.data)
              wx.navigateBack({
                delta: 0,
              })
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
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