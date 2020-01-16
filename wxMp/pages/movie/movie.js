// pages/movie/movie.js
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
    var that=this;
    wx.request({
      url: 'http://localhost:3001/movie/list',
      method:"GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          dyList: res.data
        })
      }
    })
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
  movieMoreTap:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'movie-more/movie-more?id='+id
    })
  },
  goMovieDetail: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'move-detail/move-detail?id=' + id
    })
  }
})