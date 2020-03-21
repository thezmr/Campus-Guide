var backData = require('../../data/data.js')
Page({
  data: {
    show: true,
    back: true,
    index: 0,
    list: [],
    currentLong: '',
    currentLat: '',
    position: {
      longitude: 0,
      latitude: 0
    },
    markers: [{
      latitude: 0,
      longitude: 0
    }],
    map: false
  },

  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  get_emit(e) {
    this.setData({
      currentLong: e.detail[1],
      currentLat: e.detail[0],
      markers: [{
        latitude: e.detail[0],
        longitude: e.detail[1]
      }],
    })
    console.log(this.data.currentLong)
  },

  onLoad: function(options) {

  },
  onShow(options) {
    var that = this;
    this.setData({
        list: backData.list
      }),
      wx.getLocation({
        type: 'wgs84',
        success(res) {
          that.setData({
            map: true,
            currentLong: res.longitude,
            currentLat: res.latitude,
            position: {
              longitude: res.longitude,
              latitude: res.latitude
            }
          })
          console.log(that.data.position)
        },
      })
  }
})