---
title: 学习通移动端Hook源码
published: 2026-06-04
tags: [安卓逆向, 教程]
category: 逆向工程
draft: false
pinned: true
---

# 学习通手机端修改教程

以下是学习通移动端的 Hook 配置，包含多个实用功能：

## 功能列表

[下载链接](https://1813811951.share.123pan.cn/123pan/XINlVv-oWATH)

Hook工具开源地址
::github{repo="zjyzip/AdClose"}


### 1. 修改首页学校名

| 项目 | 说明 |
|------|------|
| **功能描述** | 修改首页显示的学校名称 |
| **Hook 类型** | `FIND_AND_HOOK_METHOD` |
| **目标类** | `com.chaoxing.mobile.resource.home.MainTabTitle` |
| **目标方法** | `setTitle` |
| **参数类型** | `java.lang.String` |
| **执行时机** | `before`（方法执行前） |
| **修改方式** | 参数替换：将第一个参数替换为 `"北京大学(学生)"` |

### 2. 允许同设备多次签到

| 项目 | 说明 |
|------|------|
| **功能描述** | 绕过签到设备限制，允许同一设备多次签到 |
| **Hook 类型** | `HOOK_ALL_METHODS` |
| **目标类** | `jp.b` |
| **目标方法** | `J` |
| **执行时机** | `before`（方法执行前） |
| **修改方式** | 返回值替换：生成随机16位字符串作为签到标识 |

### 3. 允许同时多设备登录

| 项目 | 说明 |
|------|------|
| **功能描述** | 绕过多设备登录检测，允许同一账号在多个设备同时在线 |
| **Hook 类型** | `HOOK_ALL_METHODS` |
| **目标类** | `g0` |
| **目标方法** | `E1` |
| **执行时机** | `before`（方法执行前） |
| **修改方式** | 返回值替换：返回 `void`，跳过设备校验逻辑 |

### 4. 关闭开屏广告

| 项目 | 说明 |
|------|------|
| **功能描述** | 跳过开屏广告页面，直接进入主界面 |
| **Hook 类型** | `FIND_AND_HOOK_METHOD` |
| **目标类** | `com.chaoxing.mobile.activity.SplashViewModel` |
| **目标方法** | `a` |
| **参数类型** | `android.app.Activity` |
| **执行时机** | `before`（方法执行前） |
| **修改方式** | 返回值替换：返回 `null`，阻止广告逻辑执行 |

### 5. 课程列表优先显示我的课程

| 项目 | 说明 |
|------|------|
| **功能描述** | 修改课程列表排序，让"我的课程"优先显示 |
| **Hook 类型** | `HOOK_ALL_METHODS` |
| **目标类** | `com.chaoxing.mobile.course.viewmodel.CourseListViewModel` |
| **目标方法** | `f` |
| **执行时机** | `before`（方法执行前） |
| **修改方式** | 返回值替换：返回 `0`，改变排序逻辑 |

### 6. 注入 JS 脚本（考试增强）

| 项目 | 说明 |
|------|------|
| **功能描述** | 注入外部 JS 脚本，实现考试增强功能 |
| **Hook 类型** | `HOOK_ALL_METHODS` |
| **目标类** | `com.chaoxing.mobile.webapp.ui.WebAppViewerFragment` |
| **目标方法** | `O9`, `o9` |
| **执行时机** | `before`（方法执行前） |
| **修改方式** | 返回值替换：注入外部脚本 `https://cdn.jsdelivr.net/gh/qcxs/chaoxing@master/app.min.js` |

**注入 JS 实现的功能**：
- 允许复制、粘贴
- 允许截屏
- 关闭考试监控
- 页面调试
- 考试端切换执行 JS

## Hook 配置源码

```json
[
    {
        "id": "806041df-e4ef-4f11-b36c-7962d11ca5e3",
        "hookMethodType": "FIND_AND_HOOK_METHOD",
        "packageName": "com.chaoxing.mobile",
        "isEnabled": true,
        "className": "com.chaoxing.mobile.resource.home.MainTabTitle",
        "hookPoint": "before",
        "methodNames": [
            "setTitle"
        ],
        "parameterTypes": [
            "java.lang.String"
        ],
        "parameterReplacements": {
            "0": "北京大学(学生)"
        }
    },
    {
        "id": "fc326c91-34f1-4fb1-85ed-c0c877ca5673",
        "hookMethodType": "HOOK_ALL_METHODS",
        "packageName": "com.chaoxing.mobile",
        "isEnabled": true,
        "className": "jp.b",
        "hookPoint": "before",
        "methodNames": [
            "J"
        ],
        "returnValue": "String chars = \"0123456789abcdefghijklmnopqrstuvwxyz\";\nRandom random = new Random();\nStringBuilder sb = new StringBuilder();\nfor (int i = 0; i < 16; i++) {\n    sb.append(chars.charAt(random.nextInt(chars.length())));\n}\nparam.setResult(sb.toString());"
    },
    {
        "id": "97bff2cd-a52f-4f69-ada7-89962e5d1a64",
        "hookMethodType": "HOOK_ALL_METHODS",
        "packageName": "com.chaoxing.mobile",
        "isEnabled": true,
        "className": "g0",
        "hookPoint": "before",
        "methodNames": [
            "E1"
        ],
        "returnValue": "void"
    },
    {
        "id": "d724a574-a963-400b-9868-e65d1b14269e",
        "hookMethodType": "FIND_AND_HOOK_METHOD",
        "packageName": "com.chaoxing.mobile",
        "isEnabled": true,
        "className": "com.chaoxing.mobile.activity.SplashViewModel",
        "hookPoint": "before",
        "methodNames": [
            "a"
        ],
        "parameterTypes": [
            "android.app.Activity"
        ],
        "returnValue": "null"
    },
    {
        "id": "e35a670d-4cc6-4eb7-bdce-76ac7255f509",
        "hookMethodType": "HOOK_ALL_METHODS",
        "packageName": "com.chaoxing.mobile",
        "isEnabled": true,
        "className": "com.chaoxing.mobile.course.viewmodel.CourseListViewModel",
        "hookPoint": "before",
        "methodNames": [
            "f"
        ],
        "returnValue": "0"
    },
    {
        "id": "0442cec1-f2c5-4e13-af5a-5ee071e75ede",
        "hookMethodType": "HOOK_ALL_METHODS",
        "packageName": "com.chaoxing.mobile",
        "isEnabled": true,
        "className": "com.chaoxing.mobile.webapp.ui.WebAppViewerFragment",
        "hookPoint": "before",
        "methodNames": [
            "O9",
            "o9"
        ],
        "returnValue": "!document.querySelector(\".QCXScript\")&&(s=document.createElement(\"script\"),s.src=\"https://cdn.jsdelivr.net/gh/qcxs/chaoxing@master/app.min.js\",s.className=\"QCXScript\",document.head.appendChild(s))"
    }
]
```