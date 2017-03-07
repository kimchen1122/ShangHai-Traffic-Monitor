# ShangHai-Traffic-Monitor
上海交通技术监控设备列表，来自http://sh.122.gov.cn/


version.json
记录最新版本json信息


021.json
最新设备列表json信息


API:http://sh.122.gov.cn/m/placesitectrl/loadBusincessList?city=%E6%B2%AAA&page=1&size=10000&wdlxdm=29&ywfw=


20170307 新建项目，准备使用react-native开发移动应用。
应用主要根据移动设备的GPS定位，查找附近的固定监控探头，给驾驶员以提醒。

第一个版本准备先实现地图选点后显示周围探头列表，以方便违章后查询周围是否有探头。 
第二个版本增加自动提醒功能，提醒当前位置附件的探头数量。
第三个版本准备结合百度导航、高德导航、谷歌导航，估算导航线路上固定探头数量及提醒，以替换现有导航软件上探头提醒的不正确。
