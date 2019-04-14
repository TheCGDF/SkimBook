# public

GET type:

```text
返回：{
    "result":"success",
    "types":[
        {"type":"shadowsocks"}
    ]
}
```

GET node?type={节点类型，shadowsocks/v2ray}:

```text
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
    "currency":"CNY"
}
```

GET notice-public:

```text
返回：{
    "result":"success",
    "notices":[
        {"id":4}
    ]
}
```

GET notice?id={notice id}:

```text
返回：{
    "result":"success",
    "title":"hello",
    "content":"this is ..."
}
```

