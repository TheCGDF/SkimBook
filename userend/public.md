---
description: 公共API，无需登录即可调用
---

# public

## 列表查询

notice（公告列表）、node（节点列表）

```text
例：节点列表

node-column
node-list
node

node-public（full=true）和node返回结构：{
    "result":"success",
    "items":[
        [
            8,
            "美国1000000Gbps CN4线路"
        ]
}
```

## 其他

GET default:

```text
获取默认配置

返回：{
    "result":"success",
    
    "languages":"en-US",    //默认语言
    //https://www.cnblogs.com/binsys/articles/2278679.html
    
    "timezone":"Asia/Shanghai",    //默认时区
    //https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    //数据库总是以UTC存储
    //除非特别说明，API默认返回timezone时间    
    
    "currency":"CNY"    //最终结算货币
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

