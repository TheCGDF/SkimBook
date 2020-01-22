# 用户端（前端/客户端）

## Demo

测试后端地址：[https://backend.skimproj.com](https://backend.skimproj.com/public/notice-column)

测试示例：[https://backend.skimproj.com/public/notice-column](https://backend.skimproj.com/public/notice-column)

## 通用返回结果

大部分POST返回结果默认为：

```text
{
    "result":1/2/3,
    //1：成功
    //2：失败
    //3：异常
    "message":"500",    //待定
    "jwt":"..."
    //有时jwt证书临近过期，此时任意POST会触发更新jwt，返回结果会附上新的jwt
    //因为jwt中保存了language信息，如果用户切换language，POST结果也会收到jwt
}
```

GET/POST返回的`result`还有可能是`logout`，表示需要重新登录。

例如，用户修改密码导致旧的jwt被拉黑。

## 列表查询

> 后端提供了大量的列表查询API，格式统一：

### GET /xxx-column

> 查询【列表的所有column（列名）】

请求参数：

```text
language:zh-Hans（/public下需要此参数，/user下不需要）
```

返回：

```text
{
    "result":1,
    "total":122,    //数据总数
    "columns":[
        {
            "name":"menu",    //列名
            "text":"菜单"    //用于显示至前端，根据language的不同而显示不同的文字
            "reference":"false"/"true",    //后续部分会解释
            
            "filters":[    //适用于该列的筛选
                {
                    "value":"admin",
                    "text":"管理员"
                },
                {
                    "value":"affman",
                    "text":"affman"
                }
            ]
        }
    ]
}
```

### GET /xxx-list

> 对列表进行分页查询

请求参数：

```text
筛选：（不写时，视为查找所有type）
filter.scenario=topup&&filter.scenario=buyInvite&&filter.type=discount
//scenario列筛选topup和buyInvite，type列筛选discount

语言：（/public下需要此参数，/user下不需要）
language=1

按哪列排序：（不写时，使用默认排序）
sort=password&asc=true
//按password升续排列

每页容量：
number=10

页码：
page=1

查找：
search=hello

是否查询完整内容：
full=true（false时仅返回hash id数组，true时返回完整内容）
```

返回：

```text
full=false时返回：{
    "result":1,
    "total":122,    //数据总数
    "items":[3a28ja,sadr22,3af34,4r33]    //hash id数组
}

full=true时返回：{
    "result":1,
    "total":122,    //数据总数
    "items":[    //根据column返回一个list内容的二维数组
        [
            ...
        ]
    ]
}
```

### GET /xxx-pick

> 查询指定hash id

请求参数：

```text
hashId=...（可以同时查询多个id）
```

返回结果：

```text
结构与分页查询/xxx-list的full=true返回结构相同
```

### reference用法

/xxx-column中提及到，column有一个reference属性，值为false/true

值为false时，说明list返回的就是很直白的数据

比如/node-list返回以下数据：

```text
"items":[
    {
        "name":"中国A",    //节点名，reference:false
        "online":2    //在线人数，reference:false
    }
]
```

对应生成的列表就是：

| 节点名 | 在线人数 |
| :--- | :--- |
| 中国A | 2 |



当值为true时，说明这个column涉及另一张表

比如/order-column返回以下数据：

```text
"columns":[
    {
        "name":"time"
        "text":"订单时间",
        "reference":"false"    //这里为false，则什么都不用管
    },
    {
        "name":"menu"
        "text":"菜单",
        "reference":"true"    //这里为true，说明一定存在/menu列表查询和精确查询
    }    
]
```

reference为true的column，返回的内容是一个hash id

接着上面的例子，/order-list返回以下数据：

```text
"items":[
    [
        "2019-01-01 01:00:00",    //name，reference:false
        "54f7gh",    //menu，reference:true，这里返回的是一个menu的id
                     //id不是数字，而是字符串（hash id）
    ],
    [
        "2019-01-02 02:00:00",
        "74ngx",
    ]
]
```

reference的显示方法相当自由，可以显示一串字符串：

（因为reference为true，所以一定存在/menu列表查询和精确查询）

| 订单时间 | 菜单 |
| :--- | :--- |
| 2019-01-01 01:00:00 | 租金：1元 限速：10M 流量价格：1元/G |
| 2019-01-02 02:00:00 | 租金：2元 限速：20M 流量价格：2元/G |

一个超链接：

| 订单时间 | 菜单 |
| :--- | :--- |
| 2019-01-01 01:00:00 | \[菜单1\]\(http://aaa.com/user/menu/1\) |
| 2019-01-02 02:00:00 | \[菜单2\]\(http://aaa.com/user/menu/2\) |

或者直接什么都不做，直接把hash id放上去：

| 订单时间 | 菜单 |
| :--- | :--- |
| 2019-01-01 01:00:00 | 54f7gh |
| 2019-01-02 02:00:00 | 74ngx |

### GET /xxx-edit

> 获取xxx的\[编辑/新建\]页面

请求参数：

```text
hashId=6hf76tgk（如果为0，则为新建）
```

### POST /xxx-remove

> 删除列表中的一项或多项

请求参数：

```text
{
    "items":["i776jk","k67g3"]    //仅hash id
}
```

## JWT内容

```text
Claims:{
    "expiry":"2019-07-15T03:59:30Z"    //遵循RFC3339且总是UTC时区
    "hashId":"a382jw"    //用户的hash id
    "language":2    //用户的语言
}
```

## 编辑框

编辑框用于列表查询的/xxx-edit和/admin/config-edit的返回中

编辑框有以下种类：

| type 种类 | check 检查 |
| :--- | :--- |
| integer 整数 | 范围区间检查，如：\[1,4\)U{6,7}，这是一个区间和集合的并集 |
| decimal 小数 | 范围区间检查，如：\(3.8,6\] |
| string 字符串 | email，检查是否符合email |
|  | domain，检查是否符合域名 |
|  | address，检查是否符合网络地址（IP或域名） |
|  | digital，检查是否是数码单位数，如：20M，3G |
| array 下拉菜单 | 可选内容数组，如：admin=管理员&banned=被封禁用户 |
| bool 开关 | 值只能为true或false |
| date 时间 | 范围区间检查，\[2019/03/21,2020/01/01\) |

`种类`用于告知前端选择合适的编辑框，如：

```text
array种类通常用下拉菜单显示
bool种类则用开关控件显示
integer、decimal既可以使用普通文字编辑框控件，也可以使用数字控件
date既可以使用普通文字编辑控件，也可以使用日历控件
```

`检查`并不强制要求实现，甚至最简单粗暴的做法就是：全部使用普通文字编辑框，然后把`检查`以文字注释的方式标在旁边

使用场景：

```text
通过GET /user/admin/user-edit?hashId=23y66b
可能收到返回：{
    "edits":[
        {
            "name":"email",
            "text":"邮箱",
            "type":"string",    //显示普通的文字编辑框
            "check":"email",    //这个string应当是一个email
            "value":"xxx@yy.com"    //这个文字编辑框的默认值
        },
        {
            "name":"role",
            "text":"角色",
            "type":"array",
            "check":"admin=管理员&banned=被封禁用户&common=普通用户",
            //前端显示一个下拉菜单，文字分别是“管理员”、“被封禁用户”、“普通用户”
            "value":"common",    //这个用户是一个普通用户，所以默认选择common
        },
        ...    //其他编辑项
    ]
}

通过POST /user/admin/user-update
对值进行更新：{
    "hashId":"23y66b",
    "updates":[
        {
            "name":"role",
            "value":"admin"
        }
    ]
}
```

/admin/config-edit也使用此类返回

