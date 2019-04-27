# user

GET my:

```text
返回：{
    ..//待定
}
```

POST language-edit:

```text
编辑用户语言：{
    "language":"zh-CN"
}
```

POST node-edit:

```text
编辑节点配置：{
    "type":"shadowsocks",    //类型
    "node":8,    //node id
    ...    //详细配置
}
```

notice列表查询:

```text
notice-filter
notice-sort
notice-my
notice

格式同public下的notice列表查询，但不需要language参数
```

order列表查询:

```text
order-filter
order-sort
order-my
order

order-my（full=true）和order返回结构：{
    "result":"success",
    "list":[
        {
            "id":555,
            "time":"xxxx-xx-xx xx:xx:xx"
            "menu":222,订单的菜单id，
            "renew":"true"是否自动续订
        }
    ]
}
```

POST order-new:

```text
下订单：{
    "menu":8,    //菜单id
}
```

finance列表查询：

```text
finance-filter
finance-sort
finance-my
finance

finance-my（full=true）和finance返回结构：{
    "result":"success",
    "list":[
        {
            "id":"777",
            "type":"order",    //资金类型
            "price":"8",    //原始金额（非实际金额）
            "currency":"CNY",    //货币
            "time":"2019-10-10 14：44：34",    //消费时间
            "coupon":"7"    //优惠券id
        }
    ]
}
```

invite列表查询：

```text
invite-filter
invite-sort
invite-my
invite

invite-my（full=true）和invite返回结构：{
    "result":"success",
    "list":[
        {
            "id":"7",
            "finance":"6",//资金流id
        }
    ]
}
```

traffic列表查询:

```text
traffic-filter
traffic-sort
traffic-my
traffic

traffic-my（full=true）和traffic返回结构：{
    ...    //待定
}
```

POST invite-buy:

```text
购买邀请次数：{
    "number":2    //数量
}
```

