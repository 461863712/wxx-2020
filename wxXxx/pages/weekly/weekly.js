Page({
  data: {
    weeklyMovieList: [
      {
      name: "教父",
      comment: "最精彩的剧本，嘴真实的黑帮电影。",
      imagePath:"/images/b.jpg",
      isHighlyRecommended:true,/*是不是博主强烈推荐*/
      id:77
      },
      {
        name: "泰坦尼克号",
        comment: "失去的才是永恒。",
        imagePath: "/images/c.jpg",
        isHighlyRecommended: true,/*是不是博主强烈推荐*/
        id:88
      },
      {
        name: "这个杀手不太冷",
        comment: "小萝莉与怪蜀黎真纯的爱情故事。",
        imagePath: "/images/d.jpg",
        isHighlyRecommended: false,/*是不是博主强烈推荐*/
        id:99
      }
    ],
    count:123,
    score:64,
    currentIndex:0
  },
  onLoad:function(options){
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1

    })
  },
  onShow: function () {
    //每一次页面显示都要调用
  },
  onReady: function () {
    //初始渲染完成调用一次
  },
  onHide:function(){
    //页面每一次隐藏都要调用
  },
  onUnload: function () {
    //页面关闭或者卸载时调用
  },
  f0:function(e){
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },
  f1:function(e){
    // 属性data-movie-id="{{item.id}}"
    var movieId=e.currentTarget.dataset.movieId
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + movieId
    })
  },
  onShareAppMessage:function(){//转发
    return {
      title:"每周推荐"
    }
  }
})