---
description: 公共API，无需登录即可调用
---

# public

public中所有API的请求都需要`language`参数

Culture Name| Locale Language Country/Region | Locallanguage name
:- | :- | :- |
en | English | English
zh-Hans | Chinese (Simplified) | 中文（简体）

参考：[https://www.cnblogs.com/binsys/articles/2278679.html](https://www.cnblogs.com/binsys/articles/2278679.html)

## 列表查询

notice（公告列表）、node（节点列表）

```
例：查询notice（公告）列表：
GET notice-column
GET notice-list
GET notice-pick
```

## 其他

GET captcha：

```
获取一个验证码显示到前端，返回：{
    "result":1,
    "id":"...",    //验证码的id
    "picture":"..."    //一串base64，解码后是一张PNG
}
//后面也可能会有audio什么的。。。
```

GET node-menu:

```
获取指定节点的套餐
请求参数：
language：语言
node:node的hash id，可多个

返回：{
    "result":1,
    "menus":[
        [//第1个node的menu
            {
                "hashId":"k19323a",
                "rent":3.0,    //周期租金
                "ratio":2.0    //流量价格（？元/G）
                "speed":10    //限速，单位M
            }
            {
                "hashId":"sd545d",
                "rent":1.0,    //周期租金
                "ratio":5.0    //流量价格（？元/G）
                "speed":10    //限速，单位M
            }
        ],[//第2个node的menu
            {
                "hashId":"g4423a",
                "rent":3.0,    //周期租金
                "ratio":2.0    //流量价格（？元/G）
                "speed":10    //限速，单位M
            }
        ]
    ]
}
```

GET default:

```
获取默认配置
请求参数：
language：语言

返回：{
    "result":1,
    "languages":"en",    //默认语言    
    "timezone":"Asia/Shanghai",    //本站使用的时区
    //https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    //数据库总是以设定的时区存储
    //除非特别说明，API默认返回设定的时区    
    "currency":"CNY",    //最终结算货币
    //https://en.wikipedia.org/wiki/ISO_4217
    "cycle":7    //本站账单周期
    ]
}


```

GET resource：

```
获取资源（比如背景图什么的）
请求参数：
name=background-public（资源名）

返回：{
    "result":1,
    "resource":"..."
}
```

