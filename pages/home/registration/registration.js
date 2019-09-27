// pages/registration.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addflag: true,  //判断是否显示搜索框右侧部分
    addimg: '../../../images/ask.png',
    searchstr: '',
    searchflag:false,
    searchResult:["a","b","c","d","e","f","g","h","i","j","k","l"],
    itemList:[]
  },
  addhandle() {
    console.log('触发搜索框右侧事件')
  },
  //获得焦点
  getfocus(){
    this.setData({
      searchflag: true,
    })
  },
  //失去焦点
  blursearch() {
    this.setData({
      searchflag: false,
    })
    this.triggerEvent("cancelsearch");

  },
  //搜索框输入时触发
  inputsearch(e)
  {
    var a = this.data.searchResult.match(e.detail.value);
    console,log(a)
    this.setData({
      searchstr: e.detail.value
    })
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

  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  itemDetail(){
    console.log("itemDetail");
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