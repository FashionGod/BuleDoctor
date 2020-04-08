const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [
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
    ],
    load: true,
    flag0:true
  },
  ItemDetail(e) {
    let departmentName = this.data.list[this.data.TabCur].items
    [e.currentTarget.dataset.itemsid];
    let departmentName1 = -1;
    let departmentName2 = -1;
    for(i in this.data.list) {
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
      url: 'itemDetail/itemDetail?departmentName=' + departmentName +
        '&departmentName1=' + departmentName1 +
        '&departmentName2=' + departmentName2 +
        '&depList=' + depList
      ,
    })
  },
  focus0()
  {
    this.setData({
      flag0:false
    })
  },
  onLoad(options) {
    if (options.id == 1) {
      wx.setNavigationBarTitle({
        title: '自选体检项目列表'
      })
    }
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    let list = 
    [
        { name: "头部", id: "0", "items": ["脑部CT", "脑电图", "头颅磁共振", "同位素扫描"] },
        { name: "前列腺", id: "1", "items": ["前列腺增生", "前列腺炎", "前列腺癌", "前列囊肿", "前列腺脓肿", "前列结核", "前列腺结石", "前列腺B超"] },
        { name: "耳鼻咽喉", id: "2", "items": ["听力", "内耳", "外耳", "鼻腔", "鼻中膈", "咽部"] },
        { name: "妇科", id: "3", "items": ["妇科常规", "宫颈刮片", "乳腺红外扫描", "妇科B超"] },
        { name: "乙肝", id: "4", "items": ["乙肝表面抗体", "乙肝e抗原", "乙肝e抗体", "乙肝核心抗体"] },
        { name: "血脂", id: "5", "items": ["总胆固醇", "甘油三脂", "高密度脂蛋白-胆固醇", "低密度脂蛋白-胆固醇"] },
        { name: "肿瘤", id: "6", "items": ["癌胚抗原", "胎甲球", "前列腺肿瘤标记", "乳腺肿瘤标记"] },
        { name: "内科", id: "7", "items": ["心", "肺", "肝", "脾"] },
        { name: "血常规", id: "8", "items": ["白细胞计数", "粒细胞", "嗜酸性粒细胞", "嗜碱性粒细胞"] },
        { name: "尿常规", id: "9", "items": ["尿比重", "尿酸碱度", "亚硝酸盐", "白细胞"] },
        { name: "其他", id: "10", "items": ["抽血化验", "血管检查", "骨密度", "X线检查", "胃部", "胆囊", "肝脏", "胰腺", "脾脏", "肾脏", "内胆管", "总胆管", "肝门静脉", "胰腺", "脂肪肝", "肝硬化", "肝胆结石", "不明原因腹痛"] },

      ];
    // for (let i = 0; i < 26; i++) {
    //   list[i] = {};
    //   list[i].name = String.fromCharCode(65 + i);
    //   list[i].id = i;
    // }
    listHeight = [
      { "top": 0, "bottom": 222 },
      { "top": 222, "bottom": 612 },
      { "top": 612, "bottom": 918 },
      { "top": 918, "bottom": 1140 },
      { "top": 1140, "bottom": 1362 },
      { "top": 1362, "bottom": 1584 },
      { "top": 1584, "bottom": 1806 },
      { "top": 1806, "bottom": 2028 },
      { "top": 2028, "bottom": 2250 },
      { "top": 2250, "bottom": 2472 },
      { "top": 2472, "bottom": 3282 },
    ]
    for(i in list) {
      list[i].top = listHeight[i].top;
      list[i].bottom = listHeight[i].bottom;
    }
    console.log(list);
    this.setData({
      list: list,
      listCur: list[0]
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
    // console.log(tabHeight)
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
    //     list: list
    //   })
    // }
    // console.log(tabHeight)
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
  }
})