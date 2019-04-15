# user

GET language:

```text
返回：{
    "result":"success",
    "language":"zh-CN"
}
```

POST language:

```text
发送：{
    "language":"zh-CN"
}
```

POST node-edit:

```text
发送：{
    "type":"shadowsocks",    //类型
    "id":8,    //node id
    ...    //详细配置
}
```

GET notice-sort:

```text
返回：{
    ...    //格式同public/notice=order
}
```

GET notice-my:

```text
返回：{
    ...    //格式同public/notice-public
}
```

GET notice?id={notice id}:

```text
返回：{
    ...    //格式同public/notice
}
```

GET order-sort:

```text
返回：{
    "result":"success",
    "sorts":[
        "time","menu"
    ]
}
```

GET order-my:

```text
?请求参数：
page:1
number=10
sort=time/menu（可不写，支持多个）

返回：{
    "result":"success",
    "orders":[
        {"menu":99}    //当前正在生效的菜单id
    ]
}
```

POST order-new:

```text
发送：{
    "menu":8,    //菜单id
}
```

GET finance-sort

```text
返回：{
    "sorts":[
        "type","price","currency","time","coupon"
    ]
}
```

GET finance-my:

```text
?请求参数：
page:1
number=10
sort=type/price/currency/time/coupon（可不写，支持多个）

返回：{
    "result":"success",
    "finances":[
        {
            "id":"3"
        }
    ]
}
```

GET finance?id={资金流id}

```text
返回：{
    "result":"success",
    "type":"order",    //资金类型
    "origin":"8",    //原始金额（非实际金额）
    "currency":"CNY",    //货币
    "time":"2019-10-10 14：44：34",    //消费时间
    "coupon":"7"    //优惠券id
}
```

GET finance-sort

```text
返回：{
    "result":"success",
    "sorts":[
        "affiliate","origin","currency","time"
    ]
}
```

GET affiliate-my:

```text
?请求参数：
page:1
number=10
sort=affiliate/origin/currency/time（可不写，支持多个）

返回：{
    "result":"success",
    "affiliates":[
        {
            "affiliate":"7",//被邀请者id
            "finance":"6",//资金流id
        }
    ]
}
```

GET traffic-my:

```text
返回：{
    ...    //待定
}
```

POST invitation-buy:

```text
发送：{
    "number":2    //数量
}
```

