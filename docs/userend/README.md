# 用户端（前端/客户端）

## Demo

测试后端地址：[https://backend.skimproj.com](https://backend.skimproj.com/public/notice-column)

测试示例：[https://backend.skimproj.com/public/notice-column](https://backend.skimproj.com/public/notice-column)

## 通用返回结果

大部分POST返回结果默认为：

```
{
    "Result":1/2/3,
    //1：成功
    //2：失败
    //3：异常
    "Message":"500",    //待定
    "Jwt":"..."
    //有时jwt证书临近过期，此时任意POST会触发更新jwt，返回结果会附上新的jwt
    //因为jwt中保存了language信息，如果用户切换language，POST结果也会收到jwt
}
```

GET/POST返回的`Result`还有可能是`logout`，表示需要重新登录。

例如，用户修改密码导致旧的jwt被拉黑。

## 列表查询

> 后端提供了大量的列表查询API，格式统一：

### GET /xxx-columns

> 查询【列表的所有column（列名）】

请求参数：

```
language=zh-Hans（/public下需要此参数，/user下不需要）
```

返回：

```
{
    "Result":1,
    "Total":122,    //数据总数
    "Columns":[
        {
            "Name":"menu",    //列名
            "Text":"菜单"    //用于显示至前端，根据language的不同而显示不同的文字
            "Reference":"false"/"true",    //后续部分会解释
            
            "Filters":[    //适用于该列的筛选
                {
                    "Value":"admin",
                    "Text":"管理员"
                },
                {
                    "Value":"affman",
                    "Text":"affman"
                }
            ]
        }
    ]
}
```

### GET /xxx-list

> 对列表进行分页查询

请求参数：

```
筛选：（不写时，视为查找所有type）
filter[scenario]=topup*buyInvite&&filter[type]=discount
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

```
full=false时返回：{
    "Result":1,
    "Total":122,    //数据总数
    "Items":[3a28ja,sadr22,3af34,4r33]    //hash id数组
}

full=true时返回：{
    "Result":1,
    "Total":122,    //数据总数
    "Items":[    //根据column返回一个list内容的二维数组
        [
            ...
        ]
    ]
}
```

### GET /xxx-pick

> 查询指定hash id

请求参数：

```
hash-id=...（可以同时查询多个id）
```

返回结果：

```
结构与分页查询/xxx-list的full=true返回结构相同
```

### reference用法

/xxx-columns中提及到，column有一个reference属性，值为false/true

值为false时，说明list返回的就是很直白的数据

比如/node-list返回以下数据：

```
"Items":[
    {
        "Name":"中国A",    //节点名，reference:false
        "Online":2    //在线人数，reference:false
    }
]
```

对应生成的列表就是：

| 节点名 | 在线人数 |
| :--- | :--- |
| 中国A | 2 |



当值为true时，说明这个column涉及另一张表

比如/order-columns返回以下数据：

```
"Total":123,    //数据总数
"Columns":[
    {
        "Name":"time"
        "Text":"订单时间",
        "Reference":"false"    //这里为false，则什么都不用管
    },
    {
        "Name":"menu"
        "Text":"菜单",
        "Reference":"true"    //这里为true，说明一定存在/menu列表查询和精确查询
    }    
]
```

reference为true的column，返回的内容是一个hash id

接着上面的例子，/order-list返回以下数据：

```
"Items":[
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

```
hash-id=6hf76tgk（如果为0，则为新建）
```

### POST /xxx-remove

> 删除列表中的一项或多项

请求参数：

```
{
    "Items":["i776jk","k67g3"]    //仅hash id
}
```

## JWT内容

```
Claims:{
    "Expiry":"2019-07-15T03:59:30Z"    //遵循RFC3339且总是UTC时区
    "HashId":"a382jw"    //用户的hash id
    "Language":2    //用户的语言
}
```

## 动态编辑框

动态编辑框用于\[列表查询的xxx-edit/config修改\]等场合，根据后端返回内容动态生成

编辑框有以下\``type`，并且拥有`check`检查条件：

| type 种类 | check 检查条件 |
| :--- | :--- |
| integer 整数 | 范围区间检查，如：\[1,4\)U{6,7}，这是一个区间和集合的并集 |
| decimal 小数 | 范围区间检查，如：\(3.8,6\] |
| string （单行）字符串 | 正则表达式检查 |
| text （多行）文本 | 正则表达式检查 |
| array 下拉菜单 | 可选内容数组，如：admin=管理员&banned=被封禁用户 |
| bool 开关 | 值只能为true或false |
| date 日期 | 范围区间检查，如：\[2019/03/21,2020/01/01\) |
| time 时间 | 范围区间检查，如：\[2019/03/21 12:12:12,2020/01/01 12:12:12\) |

`type`用于告知前端选择合适的编辑框，如：

```
array种类通常用下拉菜单显示
bool种类则用开关控件显示
integer、decimal既可以使用普通文字编辑框控件，也可以使用数字控件
date既可以使用普通文字编辑控件，也可以使用日历控件
```

`check`用于对编辑框输入值的检查，并不强制要求全部实现，甚至最简单粗暴的做法就是：全部使用普通文字编辑框，然后把`检查`以文字注释的方式标在旁边

使用场景：

```
通过GET /user/admin/user-edit?hashId=23y66b
可能收到返回：{
    "Edits":[
        {
            "Name":"email",
            "Text":"邮箱",
            "Type":"string",    //显示普通的文字编辑框
            "Check":"[^@]+@[^\.]+\..+",    //一个简易的email检查
            "Value":"xxx@yy.com"    //这个文字编辑框的当前值
        },
        {
            "Name":"role",
            "Text":"角色",
            "Type":"array",
            "Check":"admin=管理员&banned=被封禁用户&common=普通用户",
            //前端显示一个下拉菜单，文字分别是“管理员”、“被封禁用户”、“普通用户”
            "Value":"common",    //这个用户是一个普通用户，所以默认选择common
        },
        ...    //其他编辑项
    ]
}

通过POST /user/admin/user-update
对值进行更新：{
    "HashId":"23y66b",
    "Updates":[
        {
            "name":"role",
            "value":"admin"
        }
    ]
}
```

/admin/config-edit也使用此类返回

