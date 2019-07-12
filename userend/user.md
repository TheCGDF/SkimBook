---
description: 需要登录才能调用的API
---

# user

## 列表查询

notice（公告列表）、order（订单列表）、finance（财务记录）、invite（邀请记录）、traffic（流量记录）

```text
例：查询notice（公告）列表：
notice-column
notice-list
notice

格式同public下的notice列表查询，但不需要language参数
```

## 其他

GET my:

```text
返回用户信息：{
    ..//待定
}
```

POST language-edit:

```text
编辑用户语言：{
    "language":"zh-Hans"
}
```

POST order-buy:

```text
下订单：{
    "menu":6giuyo8,    //菜单 hashid
}
```

POST invite-buy:

```text
购买邀请次数：{
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

