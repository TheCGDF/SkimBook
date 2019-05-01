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

### GET /xxx-filter

> 查询【列表支持的filter（筛选）】，用户可以通过filter筛选显示列表内容

使用场景：

```text
node（节点）拥有：
    type（类型）筛选：[shadowsocks、v2ray]
    
coupon（优惠券）拥有：
    scenario（使用场景）筛选：[充值、购买邀请码]等
    type（优惠方式）筛选：[加倍、折扣、抵扣]
```

请求参数：

```text
language=zh-CN（/public下需要此参数，/user下不需要）
```

返回：

```text
{
    "result":"success",
    "category":[    //如果列表没有任何filter以供筛选时，也会返回一个空category数组
        {
            "name":"scenario",    //类别名：使用场景
            "text":"使用场景",    //文字说明，根据language的不同而显示不同的文字
            "filter":[
                {
                    "name":"topup",
                    "text":"充值"
                },
                {
                    "name":"buyInvite",
                    "text":"购买邀请码"
                }
            ]
        },
        {
            "name":"type",    //类别名：优惠方式
            "text":"优惠方式",
            "filter":[
                {
                    "name":"discount",
                    "text":"折扣"
                },
                {
                    "name":" deduction"，
                    "text":"抵扣"
                }
            ]
        }
    ]
}
```

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
    "column":[
        {
            "name":"password",    //列名
            "text":"密码"    //用于显示至前端，根据language的不同而显示不同的文字
            "editable":"false"    //是否可以编辑此列数据，通常/user下的editable均为false
        }
    ]
}
```

### GET /xxx-public（公开）或/xxx-my（我可见）或/xxx-all（所有）

> 对列表进行分页查询

请求参数：

```text
筛选：（可不写，视为查找所有type）
filter.scenario=topup&&filter.scenario=buyInvite&&filter.type=discount
//scenario中勾选topup和buyInvite，type中勾选discount

语言：（/public下需要此参数，/user下不需要）
language=zh-CN

按哪些列排序：（不写时，使用默认排序；写多个时，按参数顺序依次排序）
sort=password&sort=id

显示哪些列：（不写时，显示所有列，写多个时，按参数顺序全部显示）
column.password=desc&column.id=asc
//按password：desc，id asc排序

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
    "ids":[1,2,3,4]
}

full=true时返回：{
    "result":"success",
    "list":[
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

前端既可以完全支持sort和type参数，允许用户对列表进行筛选和排序

也可以跳过sort和type直接使用full=true显示列表

可以通过cookie保存sort和type等

### POST /xxx-edit

> 编辑或新增列表中的一项或多项

请求参数：

```text
{
    "list":[
        {
            "id":0    //id为0时表示新增，不为0时表示编辑，后端会确认id是否都存在
            "email":"222@qq.com"    //仅当editable为true时才可以编辑
        }
    ]
}
```

## POST /xxx-remove

> 删除列表中的一项或多项

请求参数：

```text
{
    "list":["2","3"]    //仅id
}
```

