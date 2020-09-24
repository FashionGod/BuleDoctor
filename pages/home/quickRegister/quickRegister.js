// pages/registration.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addflag: true,  //判断是否显示搜索框右侧部分
    addimg: '../../../images/ask.png',
    searchstr: '', 
    searchflag: true,
    itemList:[],
    //tabbar 
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [],
    load: true,
    flag0: true,
  },
  ItemDetail(e){
    let departmentName = this.data.list[this.data.TabCur].items
    [e.currentTarget.dataset.itemsid];
    let departmentName1 = -1;
    let departmentName2 = -1;
    for (i in this.data.list) {
      for (j in this.data.list[i].items) {
        if (this.data.list[i].items[j] == departmentName) {
          departmentName1 = i;
          departmentName2 = j;
        }
      }
    }
    console.log(this.data.list)
    let depList = JSON.stringify(this.data.list);
    wx.navigateTo({
      url: 'departmentDetail/departmentDetail?departmentName=' + departmentName +
        '&departmentName1=' + departmentName1 +
        '&departmentName2=' + departmentName2 +
        '&depList=' + depList
      ,
    })
  },
  addhandle() {
    console.log('触发搜索框右侧事件')
  },
  //获得焦点
  getfocus(){
    this.setData({
      searchflag: false,
    })
  },
  //失去焦点
  blursearch() {
    this.setData({
      searchflag: true,
    })
    // this.triggerEvent("cancelsearch");

  },
  //搜索框输入时触发
  inputsearch(e)
  {
    // var a = this.data.searchResult.match(e.detail.value);
    // console.log(a)
    this.setData({
      searchstr: e.detail.value
    })
    console.log(this.data.list);
    console.log(this.data.searchstr);
  },
  //搜索回调
  endsearchList(e) {
    console.log('查询数据')
  },
  // 取消搜索
  cancelsearch() {
    this.setData({
      searchstr: ''
    })
  },
  //清空搜索框
  activity_clear(e) {

    this.setData({
      searchstr: ''
    })
  },
  buttonSearch(){
    console.log("搜索")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000,
    })
    if (options.id == 0) {
      wx.setNavigationBarTitle({
        title: '科室列表'
      })
    }
    let list = [{}];
    var that = this;
    wx.cloud.callFunction({
      name: 'getDepartment',
      success(res) {
        wx.hideToast()
        if (res.result.code == -1) {
          wx.showModal({
            title: '系统错误',
            content: '系统出现问题，请稍后再试!',
          })
        }
        else {
          let temp = res.result
          let temp2 = [
            { top: 0, bottom: 1398, },
            { top: 1398, bottom: 1998, },
            { top: 1998, bottom: 3480, },
            { top: 3480, bottom: 4164, },
            { top: 4164, bottom: 4554, },
            { top: 4554, bottom: 4776, },
            { top: 4776, bottom: 4956, },
            { top: 4956, bottom: 5388, },
            { top: 5388, bottom: 5862, },
            { top: 5862, bottom: 6798, },
            { top: 6798, bottom: 7062, },
            { top: 7062, bottom: 7620, },
            { top: 7620, bottom: 8010, },
            { top: 8010, bottom: 8106, },
            { top: 8106, bottom: 9168, },
            ]
          for(i in temp) {
            temp[i].top = temp2[i].top;
            temp[i].bottom = temp2[i].bottom;
          }
          that.setData({
            list: temp
          })
        }
      },
      fail(err) {
        console.log(err)
        console.log(err.statusCode)
        console.log(err.code)
        console.log(err.errMsg.Error)
        wx.showModal({
          title: '网络错误',
          content: '网络出现问题，请稍后再试!',
        })
        wx.hideLoading();
      }
    })
  },
  onReady() {
    wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    // let that = this;
    let list = this.data.list;
    // let tabHeight = 0;
    // if (this.data.load) {
    //   for (let i = 0; i < list.length; i++) {
    //     let view = wx.createSelectorQuery().select("#main-" + list[i].id);
    //     view.fields({
    //       size: true
    //     }, data => {
    //       list[i].top = tabHeight;
    //       tabHeight = tabHeight + data.height;
    //       list[i].bottom = tabHeight;
    //     }).exec();
    //   }
    //   console.log(list)
    //   that.setData({
    //     load: false,
    //     list: list,
    //   })
    // }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        this.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
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

  }
})