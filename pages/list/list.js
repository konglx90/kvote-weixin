//logs.js
const util = require('../../utils/util.js')



Page({
  data: {
    activity: '北戴河'
  },
  onLoad: function () {
    // wx.request({
    //   url:'https://www.kuaizhan.com/vote/api/activities/59b8cdfbb4dd76000174419d',
    //   method: 'GET',
    //   success:function(res) {
    //     console.log('xxx')
    //       // this.setData({
    //       //   activity:res.data
    //       // })
    //   },
    //   fail:function(error) {
    //     console.log(error)
    //   },
    //   complete:function() {
    //     console.log('xx')
    //   }
    // })
    wx.request({
      url: 'https://www.kuaizhan.com/vote/api/activities/59bzzz8cdfbb4dd76000174419d',
      data: {
         x: '' ,
         y: ''
      },
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
      },
      fail: function(e) {
        console.log(e, 'e')
      }
    })
  }
})
