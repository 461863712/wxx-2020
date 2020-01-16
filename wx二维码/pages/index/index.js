Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  onLoad:function(){
    
  },
  takeCode(res) {
    console.log(res);
    
  },
  aaa:function(){
    wx.scanCode({
      onlyFromCamera:false,
      success:function(res){
        console.log(res)
      }
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: [current]
    })
  },
  error(e) {
    console.log(e.detail)
  }
})