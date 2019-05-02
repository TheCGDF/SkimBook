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
筛选：（可不写，视为查找所有type）
filter.scenario=topup&&filter.scenario=buyInvite&&filter.type=discount
//scenario列筛选topup和buyInvite，type列筛选discount

语言：（/public下需要此参数，/user下不需要）
language=zh-CN

按哪些列排序：（不写时，使用默认排序；写多个时，按参数顺序依次排序）
sort.password=desc&sort.id=asc

显示哪些列：（不写时，显示所有列，写多个时，按参数顺序依次显示）
column=password&column=id
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

### POST /xxx-edit

> 编辑或新增列表中的一项或多项

请求参数：

```text
{
    "items":[
        {
            "id":0    //id为0时表示新增，不为0时表示编辑，后端会确认id是否都存在
            "email":"222@qq.com"    //仅当editable为true时才可以编辑
        }
    ]
}
```

### POST /xxx-remove

> 删除列表中的一项或多项

请求参数：

```text
{
    "items":["2","3"]    //仅id
}
```

