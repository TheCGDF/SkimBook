---
description: 公共API，无需登录即可调用
---

# public

public中所有API的请求都需要`language`参数

## 列表查询

notice（公告列表）

## 节点与菜单

GET node:

```text
获取节点列表
请求参数：
language：语言

返回：{
    "result":"success",
    "nodes":[
        {
            "hashId":"dwf2323",
            "region":CN,    //地区缩写，http://www.jctrans.com/tool/gjym.htm
            "description":"balabala",
            "status":"online"/"offline"
        }
    ]
}
```

GET menu:

```text
获取指定节点的套餐
请求参数：
language：语言
node:node的hash id

返回：{
    "result":"success",
    "menus":[
        {
            "hashId":"k19323a",
            "rent":3.0,    //周期租金
            "ratio":2.0    //流量价格（？元/G）
            "speed":10    //限速，单位M
        }
    ]
}
```

## 其他

GET default:

```text
获取默认配置
请求参数：
language：语言

返回：{
    "result":"success",
    
    "languages":"en-US",    //默认语言
    //https://www.cnblogs.com/binsys/articles/2278679.html
    
    "timezone":"Asia/Shanghai",    //本站使用的时区
    //https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    //数据库总是以设定的时区存储
    //除非特别说明，API默认返回设定的时区    
    
    "currency":"CNY",    //最终结算货币
    
    "cycle":7    //本站账单周期
    ]
}


```

GET resource：

```text
获取资源（比如背景图什么的）
请求参数：
name=background-public（资源名）

返回：{
    "result":"success",
    "resource":"..."
}
```

