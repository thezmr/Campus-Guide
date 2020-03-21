// components/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeList: {
      type: Array,
      value: []
    },
    distance: {
      type: Number,
      value: 0
    },
    position: {
      type: Object,
      value: {
        longitude: '',
        latitude: ''
      }
    },
    targetLong: {
      type: String,
      value: ""
    },
    targetLat: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    popTap() {
      this.setData({
        show: !this.data.show
      })
    },
    //测距
    getDistance(lat1, lng1, lat2, lng2) {

      lat1 = lat1 || 0;

      lng1 = lng1 || 0;

      lat2 = lat2 || 0;

      lng2 = lng2 || 0;

      var rad1 = lat1 * Math.PI / 180.0;

      var rad2 = lat2 * Math.PI / 180.0;

      var a = rad1 - rad2;

      var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;

      var r = 6378137;

      return (r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2)))).toFixed(0) / 1000
    },
    listTap(e) {
      var locArr = e.currentTarget.dataset.bean.location.split(',');
      this.triggerEvent('sonevent', locArr)
    }


  },




})