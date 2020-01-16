var newsData = require("../../../data/newsData.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    music:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      newsData: newsData.newsData[options.newsid],
      newsId: options.newsid
    })
    var newsCollect = wx.getStorageSync("newsCollect");
  
  //初始化收藏本地存储
    if (newsCollect){
      var newCollect = newsCollect[options.newsid];
      if (newCollect){
        this.setData({
          collected: newCollect
        })
      }else{
        newsCollect[options.newsid] = false;
        wx.setStorageSync("newsCollect", newsCollect)
      }
      
    }else{
      var newsCollect = {};
      newsCollect[options.newsid] = false;
      wx.setStorageSync("newsCollect", newsCollect)
    }
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
    const backgroundAudioManager = wx.getBackgroundAudioManager();
    backgroundAudioManager.stop();
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
  collectTap:function(e){
    var newsCollect = wx.getStorageSync("newsCollect");
    var newCollect=newsCollect[this.data.newsId]
    newCollect = !newCollect;
    newsCollect[this.data.newsId] = newCollect
    wx.setStorageSync("newsCollect", newsCollect);
    this.setData({
      collected: newCollect
    })
    
    //提示
    wx.showToast({
      title: this.data.collected ? "收藏成功" : "取消收藏",
      icon:'success',
      duration:800,
      mask:true
    })
  },
  onShowTap:function(e){
    wx.showActionSheet({
      itemList: ['分享到微信', '分享到微博', '分享到QQ'],
      success(res) {
        console.log(res)
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  // 分享
  onShareAppMessage: function () {
    return {
      title: this.data.newsData.title,
      path:'pages/news/newsDetail/newsDetail'
    }
  },
  playMusic:function(e){
    const backgroundAudioManager = wx.getBackgroundAudioManager();
    backgroundAudioManager.title = newsData.newsData[this.data.newsId].music.title;
    backgroundAudioManager.coverImgUrl = newsData.newsData[this.data.newsId].music.coverImg;
    backgroundAudioManager.src = newsData.newsData[this.data.newsId].music.url;
    if(this.data.music === false){
      this.setData({
        music:true
      })
    }else{
      backgroundAudioManager.stop();
      this.setData({
        music: false
      })
    }
  }
})