# 用户端（前端/客户端）
## 通用返回结果
```json
大部分POST返回结果：{
    "Result":1/2/3,
    //1：成功
    //2：失败
    //3：异常
    "Message":"500",    //当且仅当失败时存在
    "Jwt":"..."
    //有时jwt证书临近过期，此时任意POST会触发更新jwt，返回结果会附上新的jwt
    //因为jwt中保存了language信息，如果用户切换language，POST结果也会收到jwt
}
```
## 列表查询
>后端提供了大量的列表查询API，格式统一：
### GET /xxx-columns
>查询【列表的所有column（列名）】
```
参数示例：language=en
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| language | 语言，仅/public下需要此参数 | 否，默认en |

```json
成功返回：{
    "Result":1,
    "Total":122,    //数据总数
    "Columns":[
        {
            "Name":"menu",    //列名
            "Text":"菜单",    //用于显示至前端，根据language的不同而显示不同的文字
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
>对列表进行分页查询
```
参数示例：language=zh-Hans&timezone=480&filter[scenario]=1*2&filter[class]=1&sort=scenario&asc=false&number=10&page=1&search=hello=full=true
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| language | 语言，仅/public下需要此参数 | 否，默认en |
| timezone | 时区，单位分钟，仅/public下需要此参数 | 否，默认+0 |
| filter\[\] | 列筛选，单列有多个筛选项时用星号（*）隔开 | 否 |
| sort | 按某列排序 |否 |
| asc | 排序方向 | 否，默认true |
| number | 页容量 | 是 |
| page | 页码 | 是 |
| search | 关键字查询 | 否 |
| full | 完整行，false时仅返回id | 是 |
```json
full=false时成功返回：{
    "Result":1,
    "Total":122,    //数据总数
    "Items":["1","122","122A","133b7"]    //id数组
}

full=true时成功返回：{
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
>查询指定id
```
参数示例：language=en&timezone=480&ids[]=as3sa&ids[]=4zf23
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| language | 语言，仅/public下需要此参数 | 否，默认en |
| timezone | 时区，单位分钟，仅/public下需要此参数 | 否，默认+0 |
| ids\[\] | 想要查询的id数组 | 是 |
返回结构与分页查询/xxx-list的full=true返回结构相同
### reference用法
/xxx-columns中提及到，column有一个reference属性，值为false/true

值为false时，说明list返回的就是很直白的数据

比如/node-list返回以下数据：
```json
"Items":[
    {
        "Name":"中国A",    //节点名，reference:false
        "Online":2    //在线人数，reference:false
    }
]
```
对应生成的列表就是：
| 节点名 | 在线人数 |
| :- | :- |
| 中国A | 2 |
当值为true时，说明这个column涉及另一张表

比如/order-columns返回以下数据：
```json
"Total":123,    //数据总数
"Columns":[
    {
        "Name":"time",
        "Text":"订单时间",
        "Reference":"false"    //这里为false，则什么都不用管
    },
    {
        "Name":"menu",
        "Text":"菜单",
        "Reference":"true"    //这里为true，说明一定存在/menu列表查询和精确查询
    }    
]
```
reference为true的column，返回的内容是一个id

接上例，/order-list返回以下数据：
```json
"Items":[
    [
        "2019-01-01 01:00:00",    //name，reference:false
        "54f7gh",    //menu，reference:true，这里返回的是一个menu的id
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
| 2019-01-01 01:00:00 | [菜单1](http://aaa.com/user/menu/1) |
| 2019-01-02 02:00:00 | [菜单2](http://aaa.com/user/menu/2) |
或者直接什么都不做，直接把id放上去：
| 订单时间 | 菜单 |
| :--- | :--- |
| 2019-01-01 01:00:00 | 54f7gh |
| 2019-01-02 02:00:00 | 74ngx |
### GET /xxx-edit
>获取xxx的\[编辑/新建\]页面
```
参数示例：id=6hf76tgk
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| id | id | 否，如果不存在，则为新建 |
### POST /xxx-remove
>删除列表中的一项或多项
```
参数示例：{
    "Items":["i776jk","k67g3"]
}
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| items | id数组 | 是 |
## JWT内容
```json
Claims:{
    "Expiry":"2019-07-15T03:59:30Z",    //遵循RFC3339且总是UTC时区
    "Id":"a382jw",    //用户的id
    "Language":2,    //用户的语言
    "Timezone":3600    //用户的时区
}
```
## 动态编辑框
动态编辑框用于\[列表查询的xxx-edit/config修改\]等场合，根据后端返回内容动态生成

编辑框有以下`type`，并且拥有`check`检查条件：
| type 种类 | check 检查条件 |
| :- | :- |
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
```json
通过GET /user/admin/user-edit?id=23y66b
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
    "Id":"23y66b",
    "Updates":[
        {
            "Name":"role",
            "Value":"admin"
        }
    ]
}
```

/admin/config-edit也使用此类返回