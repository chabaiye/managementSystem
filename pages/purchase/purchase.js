// pages/purchase/purchase.js
Page({
  data: {
    active: 2,
    mainActiveIndex: 0,
    activeId: null,
    items: [
      {
        // 导航名称
        text: '所有城市',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        badge: 3,
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        dot: true,
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '温州',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            disabled: true,
          },
          {
            text: '杭州',
            id: 2,
          },
        ],
      },
    ]
  },
  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
    });
  },
  onClickItem({ detail = {} }) {
    const activeId = this.data.activeId === detail.id ? null : detail.id;

    this.setData({ activeId });
  },
  // 顶部标签
  onClickLeft() {
    wx.showToast({ title: '点击返回', icon: 'none' });
  },
  onClickRight() {
    wx.showToast({ title: '点击按钮', icon: 'none' });
  },
  // tabbar转换页面
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
    switch (this.data.active) {
      case 0:
        wx.navigateTo({
          url: '../index/index',
        })
        break;
      case 1:
        wx.navigateTo({
          url: '../circulate/circulate',
        })
        break;
      case 2:
        wx.navigateTo({
          url: '../purchase/purchase',
        })
        break;
      case 3:
        wx.navigateTo({
          url: '../user/user',
        })
        break;
      default:
        break;
    }
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