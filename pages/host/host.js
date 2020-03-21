// pages/host/host.js
var amapFile = require('../../components/amap-wx.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hideHeader: true,
    phoneWidth: 0,
    temp: 0,
    weather:""
  },

  onPageScroll(e) {
    let phoneWidth = (wx.getSystemInfoSync().windowWidth) / 3;
    if (e.scrollTop > phoneWidth) {
      this.setData({
        hideHeader: false
      })
    } else {
      this.setData({
        hideHeader: true
      })
    }
  },
  infoTap() {
    wx.navigateTo({
      url: '../info/info',
    })
  },
  sceneTap() {
    wx.navigateTo({
      url: '../scene/scene',
    })
  },
  goTap() {
    wx.navigateTo({
      url: '../map/map',
    })
  },
  gradeTap() {
    wx.navigateTo({
      url: '../grade/grade',
    })
  },
  boardTap() {
    wx.navigateTo({
      url: '../fair/fair'
    })
  },
  _getWeather: function() {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({
      key: 'cfc126eb43734d4898544d6822987b47'
    });
    myAmapFun.getWeather({
      success: function(data) {
        if (data.city) {
          that.setData({
            temp: data.liveData.temperature,
            weather: data.liveData.weather,
          })
        }
        //成功回调
        console.log(data)
      },
      fail: function(info) {
        //失败回调
        console.log(info)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
     this._getWeather()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  }
})