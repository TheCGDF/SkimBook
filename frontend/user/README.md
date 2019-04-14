# user

POST node-edit:

```text
发送：{
    "type":"shadowsocks",    //类型
    "id":8,    //node id
    ...    //详细配置
}
```

GET notice-my:

```text
返回：{
    ...    //同public/notice-public
}
```

GET notice?id={notice id}:

```text
返回：{
    ...    //同public/notice
}
```

GET order-my:

```text
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

GET finance-my:

```text
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
    "price":"8",    //原价（非实际消费）
    "currency":"CNY",    //货币
    "time":"2019-10-10 14：44：34",    //消费时间
    "coupon":"7"    //优惠券id
}
```

GET affiliate-my:

```text
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

