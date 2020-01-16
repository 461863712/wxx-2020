let ctx;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:false,
    userinfo:{},
    pan:{
      lineWidth:5,
      color:"#cc0033"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();


    ctx = wx.createCanvasContext("myCanvas", this);
    ctx.setStrokeStyle(this.data.pan.color);
    ctx.setLineWidth(this.data.pan.lineWidth);
    ctx.setLineCap("round");
    ctx.setLineJoin("round");
  },
  touchStart:function(e){
    ctx.setStrokeStyle(this.data.pan.color);
    ctx.setLineWidth(this.data.pan.lineWidth);
    ctx.moveTo(e.touches[0].x, e.touches[0].y);
  },
  touchMove:function(e){
    ctx.lineTo(e.touches[0].x, e.touches[0].y);
    ctx.stroke();
    ctx.draw(true);
    ctx.moveTo(e.touches[0].x, e.touches[0].y);
  },
  panSelect:function(e){
    var val = e.currentTarget.dataset.param;
    this.setData({
      "pan.lineWidth":val
    })
  },
  panColor:function(e){
    var val = e.currentTarget.dataset.param;
    this.setData({
      "pan.color": val
    })
    console.log(this.data)
  },
  headerGetuserinfo:function(res){
    // 获取点击授权还是取消
    var that = this;
    if (res.detail.userInfo){
      this.getUserInfo();
    }
  },
  getUserInfo:function(){
    var that = this;
    wx.getUserInfo({
      success(res) {
        that.setData({
          userinfo: res.userInfo
        })
      },
      fail: function (res) {
        console.log("没有授权")
      }
    })
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权
          that.setData({
            user: false
          })
        } else {
          // 没有授权
          that.setData({
            user: true
          })
        }
      }
    })
  }
})
