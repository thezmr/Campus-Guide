// pages/scene/scene.js
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  data: {
    showAvatar: false,
    back: true,
    photoUrl: "",
    photoUrl2: "",
    showPhoto2:false,
    place: "",
    place2: "",
    arr:[],
    index:0
  },
  getPhoto() {
    wx.cloud.callFunction({
      name: 'getPhoto',
    }).then(res => {
      console.log('请求成功', res)
      let arr2 = this.data.arr.concat(res)
      console.log(arr2)
      this.setData({
        showPhoto2: !this.data.showPhoto2,
      })
      if(this.data.showPhoto2){
        this.setData({
          // showPhoto2: !this.data.showPhoto2,
          photoUrl: res.result.list[0].url,
          photoUrl2: res.result.list[1].url,
          place: res.result.list[0].place,
          place2: res.result.list[1].place,
        })
      }
    }).catch(err => {
      console.log('请求失败', err)
    })
  },
  downloadTap() {
    wx.cloud.downloadFile({
      fileID: this.data.photoUrl,
    }).then(res => {
      wx.saveImageToPhotosAlbum({
        filePath: res.tempFilePath,
        success(res){
          console.log(res)
        },
        fail(err){
          console.log(err)
        }
      })
    }).catch(err => {
      console.log(err)
    })
  },
  onLoad: function(options) {
    this.getPhoto()
  },
})