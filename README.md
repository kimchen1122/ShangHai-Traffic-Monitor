# ShangHai-Traffic-Monitor #
上海交通技术监控设备列表

## 文档说明 ##
#### version.json ####
>记录最新版本json信息

#### 021.json ####
>最新设备列表json信息

## API ##

* [ 获取jsonAPI ](http://sh.122.gov.cn/m/placesitectrl/loadBusincessList?city=%E6%B2%AAA&page=1&size=900000&wdlxdm=29&ywfw=)

## 开发计划 ##
>20170307 新建项目，准备使用react-native开发移动应用。
>应用主要根据移动设备的GPS定位，查找附近的固定监控探头，给驾驶员以提醒。

* - [ ] __version 1.0__
>实现地图选点后显示周围探头列表，以方便疑似违章后查询周围是否有探头。
- [ ] React Native 开发环境搭建
- [ ] React Native 百度地图插件集成
* - [ ] __version 2.0__
>增加自动提醒功能，语音或消息提醒当前位置附件的探头数量。
* - [ ] __version 3.0__
>结合百度导航、高德导航、谷歌导航，估算导航线路上固定探头数量及提醒，以替换现有导航软件上探头提醒的不正确。
