// pages/circulate/circulate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    mainActiveIndex: 0,
    activeId: null,
    items: [
      {
        // 导航名称
        text: '城市1',
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '温州',
            // id，作为匹配选中状态的标识
            id: 1,
          },
          {
            text: '杭州',
            id: 2,
          },
        ],
      },
      {
        // 导航名称
        text: '城市2',
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '破州',
            // id，作为匹配选中状态的标识
            id: 1,
          },
          {
            text: '杭州',
            id: 2,
          },
        ],
      },
    ]
  },
})