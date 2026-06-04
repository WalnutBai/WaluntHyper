---
title: Lx Music 补完计划
published: 2026-06-04
tags: [音乐]
category: 工具推荐
draft: false
---

你能看到这个链接，我估计你大概也是知道 LX Music，所以说这里也不过多介绍。这次主要介绍的是这个项目的原版开源地址和我的改版后的开源地址。

原版的话它做的很优秀，但是呢有一些功能没有，就感觉很可惜。与其麻烦别人，不如麻烦自己。我对这个开源项目做了一些修改，让它变得更具有实用性，更人性化。


## 修改日志

**26.06.4**

### 新增
- WebDAV 远程播放，支持匹配标签歌词，适配多文件夹情况下的歌单选择
- 左侧菜单排序
- 我的列表音乐列表排序（Pad 竖屏可见）
- 横向滚动界面排序
- 显示问候语开关
- 日志复制功能
- WebDAV 运行日志
- 隐藏小白条
- 上滑播放栏显示播放列表开关（搭配隐藏小白条用）

### 优化
- 底部播放栏背景样式同步设置修改
- 日志界面上下滑动卡顿 BUG
- 部分数据备份问题
- 音源播放日志

### 修复
- 部分音质无法向下兼容导致部分播放失败的 BUG
- 我的歌单中音乐列表的背景样式 BUG
- 我中音乐列表的背景样式不同步设置修改的 BUG
- 每日推荐中推荐歌单背景样式不同步设置修改的 BUG

以上就是拓展修改的全部功能。

## 开源地址

[下载链接](https://1813811951.share.123pan.cn/123pan/XINlVv-II4TH)

::github{repo="WalnutBai/lx-n-music-mobile-pro"}

原项目地址
::github{repo="souvenp/lx-netease-music-mobile"}



## 配套项目

当然，仅此是不足以叫补完计划。针对动态栏歌词和灵动岛歌词，这里我推荐两个项目。

#### 歌词提取模块

一个是歌词提取，提供在线歌词获取，支持 lxmusic、ikun Music、LX-n Music。

歌词获取，但是这个官方仓库它是有 bug 的。也不算是 bug 吧，可能作者压根就没有想为这个落雪适配歌名，因为它源代码里面就没有写歌名的东西。

所以呢我就自己适配了一下，把这个歌词获取也给做出来了。


[下载链接](https://1813811951.share.123pan.cn/123pan/XINlVv-5CSTH)

#### 开源地址

我的仓库

::github{repo="WalnutBai/LyricProvider"}


原项目地址
::github{repo="tomakino/LyricProvider"}



### HyperLyric 灵动岛歌词模块

然后的话，这边推荐一个适配小米澎湃 OS 3 灵动岛歌词的开源项目，小米的非常好用。

[下载地址](https://1813811951.share.123pan.cn/123pan/XINlVv-kWATH)

::github{repo="limczhh/HyperLyric"}

两者搭配可以得到以下效果。

<table>
  <tr>
    <td><img src="/src/content/posts/lxnmusic/演示1.jpg" alt="演示效果1" width="300" height="200"></td>
    <td><img src="/src/content/posts/lxnmusic/演示2.jpg" alt="演示效果2" width="300" height="200"></td>
  </tr>
</table>

## 效果展示

<table>
  <tr>
    <td><img src="/src/content/posts/lxnmusic/1.jpg" alt="效果1" width="300" height="200"></td>
    <td><img src="/src/content/posts/lxnmusic/2.jpg" alt="效果2" width="300" height="200"></td>
    <td><img src="/src/content/posts/lxnmusic/3.jpg" alt="效果3" width="300" height="200"></td>
  </tr>
  <tr>
    <td><img src="/src/content/posts/lxnmusic/4.jpg" alt="效果4" width="300" height="200"></td>
    <td><img src="/src/content/posts/lxnmusic/5.jpg" alt="效果5" width="300" height="200"></td>
    <td><img src="/src/content/posts/lxnmusic/6.jpg" alt="效果6" width="300" height="200"></td>
  </tr>
  <tr>
    <td><img src="/src/content/posts/lxnmusic/7.jpg" alt="效果7" width="300" height="200"></td>
    <td><img src="/src/content/posts/lxnmusic/8.jpg" alt="效果8" width="300" height="200"></td>
    <td><img src="/src/content/posts/lxnmusic/9.jpg" alt="效果9" width="300" height="200"></td>
  </tr>
</table>


## 音源

### 本地音源
[下载链接](https://www.123865.com/s/XINlVv-AgJVh)

### 在线音源
就放这一个，因为就这俩好使，且基本不更新。而且在线导入总会遇到一堆问题，不如本地导入好使。

#### 野花
```
https://ghproxy.net/raw.githubusercontent.com/pdone/lx-music-source/main/flower/latest.js
```