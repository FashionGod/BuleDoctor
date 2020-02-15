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
    let departmentName = this.data.list[this.data.TabCur].items[e.currentTarget.dataset.itemsid];
    wx.navigateTo({
      url: 'departmentDetail/departmentDetail?departmentName='+departmentName,
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
          that.setData({
            list: res.result,
            listCur: list[0]
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
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
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