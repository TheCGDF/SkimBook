---
description: 公共API，无需登录即可调用
---

# public

GET language:

```text
获取默认语言和所有语言，返回：{
    "result":"success",
    "default":"en-US",
    "languages":[
        "en-US","zh-CN"
    ]
}

//https://tools.ietf.org/html/bcp47
```

GET timezone:

```text
获取默认时区，返回：{
    "result":"sucess",
    "default":"Asia/Shanghai"
}
// https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
//数据库总是以UTC存储
//API总是返回timezone时间
```

GET currency:

```text
获取默认结算货币，返回：{
    "result":"success",
    "default":"CNY"    //最终结算货币
}
```

node列表查询：

```text
node-column
node-public
node

node-public（full=true）和node返回结构：{
    "result":"success",
    "items":[
        "node":8,
        "name":"美国1000000Gbps CN4线路",
        "menu":[
            "id":"3",    //菜单id
            "price":"6",    //月租
            "ratio":"0.5",    //每G价格（未指定货币单位）
            "speed":"10"    //速度
        ]
}
```

notice列表查询:

```text
notice-column
notice-public
notice

notice-public（full=true）和notice返回结构：{
    "result":"success",
    "items":[
        {
            "title":"hello",
            "content":"this is ..."
        }
    ]
}
```

