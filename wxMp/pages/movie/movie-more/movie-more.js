// pages/movie/movie-more/movie-more.js
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
    var id=options.id;
    this.setData({
      id: id
    })
    var that=this;
    wx.showNavigationBarLoading();//数据加载动画
    wx.request({
      url: 'http://localhost:3001/movie/more/list?id='+id,
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        wx.setNavigationBarTitle({
          title: res.data.title,
        })
        that.setData({
          data: res.data
        })
        wx.hideNavigationBarLoading();
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
    // 下拉需要配置json："enablePullDownRefresh": true
    var that = this;
    wx.request({
      url: 'http://localhost:3001/movie/more/list?id=' + that.data.id,
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          data: res.data
        })
        wx.stopPullDownRefresh();
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showNavigationBarLoading();//数据加载动画
    var that=this;
    wx.request({
      url: 'http://localhost:3001/movie/more/list?id=' + that.data.id,
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          list: res.data
        })
        that.data.data.list=that.data.data.list.concat(that.data.list.list);//合并
        //页面刷新下拉
        that.setData({
          data: that.data.data
        })
        wx.hideNavigationBarLoading();
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goMovieDetail:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../move-detail/move-detail?id='+id
    })
  }
})