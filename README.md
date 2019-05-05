# iviewSearch
一个用于在Alfred中搜索iview组件的workflow

### 用法

* 如果只为了使用该workflow,只需下载「iViewSearch.alfredworkflow」这个文件并双击安装即可
* 在Alfred中输入关键字'iv'+空格+'组件名'(eg:iv button,iv 按钮,iv tab)即会模糊查询匹配出相应组件并显示在列表中,然后就可以跳转到相应组件对应使用说明页面
* 如需更新iview组件信息「即更新libs/iview_components.json文件」,在Alfred中输入'ivs'并点击回车即可

### 环境说明
* 环境要求:node>=8.1.3 && alfred >= 3.0 && Chrome
* 在终端中输入`/usr/local/bin/node`如果提示`no such file or directory`,说明本地没有安装node或者由于其他操作使得node路径发生改变，请到node官网下载node稳定版或参考[/usr/local/bin/node找不到](http://www.caotama.com/9535.html)创建node软链接

### 其他
* 存储所有iview组件的json文件「iview_comonets.json」是一个本地静态文件,以后会增加一个爬虫功能来爬取所有组件的名称和url存到本地 
