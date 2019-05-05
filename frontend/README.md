# 前端API

大部分POST 返回结果默认为：

```text
{
    "result":"success"/"error",
    "message":"500"    //待定
}
```



## 列表查询

> 后端提供了大量的列表查询API，格式统一：

### GET /xxx-column

> 查询【列表的所有column（列名）】

请求参数：

```text
language:zh-CN（/public下需要此参数，/user下不需要）
```

返回：

```text
{
    "result":"success",
    "columns":[
        {
            "name":"role",    //列名
            "text":"角色"    //用于显示至前端，根据language的不同而显示不同的文字
            "filters":[    //适用于该列的筛选
                {
                    "name":"admin",
                    "text":"管理员"
                },
                {
                    "name":"affman",
                    "text":"affman"
                }
            ]
        }
    ]
}
```

### GET /xxx-public（公开）或/xxx-my（我可见）或/xxx-all（所有）

> 对列表进行分页查询

请求参数：

```text
筛选：（不写时，视为查找所有type）
filter.scenario=topup&&filter.scenario=buyInvite&&filter.type=discount
//scenario列筛选topup和buyInvite，type列筛选discount

语言：（/public下需要此参数，/user下不需要）
language=zh-CN

按哪些列排序：（不写时，使用默认排序；写多个时，按参数顺序依次排序）
sort.password=desc&sort.id=asc

显示哪些列：（不写时，显示所有列;写多个时，按参数顺序依次显示）
column=password&column=id
//按password：desc，id：asc排序

每页容量：
number=10

页码：
page=1

是否查询完整内容：
full=true（false时仅返回id数组，true时返回完整内容）
```

返回：

```text
full=false时返回：{
    "result":"success",
    "items":[1,2,3,4]
}

full=true时返回：{
    "result":"success",
    "items":[
        {
            ...    //根据不同的列表结构而返回不同的list内容
        }
    ]
}
```

### GET /xxx

> 对列表进行精确查询

请求参数：

```text
id=123（可以同时查询多个id）
```

返回结果：

```text
结构与分页查询的full=true返回结构相同
```

### GET /xxx-edit

> 获取xxx的\[编辑/新建\]页面

请求参数：

```text
id=234（如果为0，则为新建）
```

### POST /xxx-remove

> 删除列表中的一项或多项

请求参数：

```text
{
    "items":["2","3"]    //仅id
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
通过GET /user/admin/user-edit?id=233
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
    "id":"233",
    "updates":[
        {
            "name":"role",
            "value":"admin"
        }
    ]
}
```

/admin/config-edit也使用此类返回

