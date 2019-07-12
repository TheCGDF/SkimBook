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
        "en-US","zh-Hans"
    ]
}

//https://www.cnblogs.com/binsys/articles/2278679.html
```

GET timezone:

```text
获取默认时区，返回：{
    "result":"success",
    "default":"Asia/Shanghai"
}
//https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
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

notice列表查询:

```text
notice-column
notice-list
notice

notice-public（full=true）和notice返回结构：{
    "result":"success",
    "items":[
        [
            "hello",
            "this is ..."
        ]
    ]
}
```

GET confusion：

```text
获取混淆验证码：{
    ...    //待定
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

