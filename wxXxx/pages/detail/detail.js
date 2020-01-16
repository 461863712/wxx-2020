Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      mid: options.id
    })
    var thas=this;
    wx.request({
      url: 'http://127.0.0.1:3001/movie/?'+options.id,
      method:'GET',
      success:function(res){0
        if (res.statusCode === 200){
          thas.setData({
            movie: res.data
          })
          wx.setNavigationBarTitle({//设置导航头
            title: res.data.rating_average + "分" + res.data.title,
          })
          wx.hideNavigationBarLoading();
        }
      
      }
    })
    wx.showNavigationBarLoading();//加载数据中的动画
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  onShareAppMessage: function () {
    return {
      title: "向你推荐"+this.data.movie.title
    }
  }
})