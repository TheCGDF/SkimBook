# public

GET language:

```text
返回：{
    "result":"success",
    "language":"en-US"
}
```

GET type-sort:

```text
返回：{
    "result":"success",
    "sorts":[
        "type"
    ]
}
```

GET type-all:

```text
?请求参数：
page:1
number=10
sort=type（可不写，支持多个）

返回：{
    "result":"success",
    "types":[
        {"type":"shadowsocks"}
    ]
}
```

GET node-sort:

```text
返回：{
    "result":"success",
    "sorts":[
        "name"
    ]
}
```

GET node-public:

```text
?请求参数：
type:shadowsocks/v2ray
language:zh-CN（name语言）
page:1
number=10
sort=name（可不写，支持多个）

返回：{
    "result":"success",
    "nodes":[
        "id":8,
        "name":"美国1000000Gbps CN4线路",
        "menu":[
            "id":"3",    //菜单id
            "price":"6",    //月租
            "ratio":"0.5",    //每G价格（未指定货币单位）
            "speed":"10"    //速度
        ]
    ]
}
```

GET currency:

```text
返回：{
    "result":"success",
    "currency":"CNY"    //最终结算货币
}
```

GET notice-sort:

```text
返回：{
    "result":"success",
    "sorts":[
        "time","title"
    ]
}
```

GET notice-public:

```text
?请求参数：
page:1
number=10
language:en-US（语言）
sort=time/title（可不写，支持多个）

返回：{
    "result":"success",
    "notices":[
        {"id":4}
    ]
}
```

GET notice:

```text
请求参数：
id=4

返回：{
    "result":"success",
    "title":"hello",
    "content":"this is ..."
}
```

