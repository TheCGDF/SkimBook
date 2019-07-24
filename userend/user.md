---
description: 需要登录才能调用的API
---

# user

## 列表查询

notice（公告列表）、order（订单列表）、finance（财务记录）、invite（邀请记录）、traffic（流量记录）

```text
例：查询notice（公告）列表：
GET notice-column
GET notice-list
GET notice-pick

格式同public下的notice列表查询，但不需要language参数
```

节点与菜单

GET node:

```text
获取节点列表

返回：{
    "result":"success",
    "nodes":[
        {
            "hashId":"dwf2323",
            "region":CN,    //地区缩写，http://www.jctrans.com/tool/gjym.htm
            "description":"balabala",
            "status":"online"/"offline",
            "actived":12    //激活此节点的人数
        }
    ]
}

//注：此处的返回与/public/node的返回略有不同，增加了actived字段
```

GET menu:

```text
获取指定节点的套餐
请求参数：
node:node的hash id

返回：{
    "result":"success",
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

POST menu-active:

```text
激活菜单

请求体：{
    menus:["s12r4n","zijef9"]//由menu的hash id组成的数组，用于一次性激活一个或多个菜单
}
```

## 其他

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
    "language":"zh-Hans"
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

