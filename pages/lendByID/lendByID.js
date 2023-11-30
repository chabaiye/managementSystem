// pages/lendByID/lendByID.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "jobNo":0,
    token:'Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImM2YTY2NWJlLTM1MTUtNGRmOS04N2RmLWI5ZWU3ZTJhZGEwYiJ9.7iilBG7tuLW-NDFz4m8Mo2n2JdtqBKsGyWywc1Wh9Y4WmPjZjOjMkiEor4lLDYOf7prGuJmlt21y6wBPAObZ3g'
  },
  getjobNo(e){
    console.log(e.detail.value);
    this.setData({
      'jobNo':e.detail.value
    })
  },
  sendjobNo(){
    let that = this
    wx.request({
      url: 'http://119.145.71.191/prod-api/goods/jobCardItem/getJobCardGoods?jobNo='+that.data.jobNo,
      header:{
        'Authorization':that.data.token
      },
      method:"GET",
      success(res){
        console.log(res.data);
      }
    })
  },
  onClickLeft() {
    wx.navigateBack({
      delta: 0,
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
    let user = wx.getStorageSync('user')
    this.setData({
      token:user.data.token
    })
    console.log(this.data.token);
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