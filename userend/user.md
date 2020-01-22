---
description: 需要登录才能调用的API
---

# user

## 列表查询

notice（公告列表）、node（节点列表）、order（订单列表）、finance（财务记录）、invite（邀请记录）、traffic（流量记录）

```text
例：查询notice（公告）列表：
GET notice-column
GET notice-list
GET notice-pick

格式同public下的notice列表查询，但不需要language参数
```

## 其他

GET node-menu:

```text
获取指定节点的套餐
请求参数：
node:node的hash id

返回：{
    "result":1,
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

POST menu-adjust:

```text
调整订单

请求体：{
    menus:[
        {
            "hashId":"d134",
            "operation":1,
            //1：立即激活（activate），2：次周期激活（order）
            //3：立即停用（inactive），4：次周期停用（expire）
        },
    ]
}
```

GET my:

```text
返回用户信息

请求体：{
    ..//待定
}
```

POST language-edit:

```text
编辑用户语言

请求体：{
    "language":1
}
```

POST order-buy:

```text
下订单

请求体：{
    "menu":6giuyo8,    //菜单 hashid
}
```

POST invite-buy:

```text
购买邀请次数

请求体：{
    "number":2    //数量
}
```

POST cache-edit:

```text
向机场存入客户端缓存
```

GET cache:

```text
通过key查询指定缓存
```

