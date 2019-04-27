# 前端API

大部分POST 返回结果默认为：

```text
{
    "result":"success"/"error",
    "message":"500"    //待定
}
```



后端提供了大量的列表查询API，HTTP方法均为GET且格式统一：

```text
GET /xxx-filter
查询列表支持的筛选，用户可以通过filter筛选显示列表内容
filter使用场景：
node（节点）拥有：
    type（类型）筛选：[shadowsocks、v2ray]
coupon（优惠券）拥有：
    scenario（使用场景）筛选：[充值、购买邀请码]等
    type（优惠方式）筛选：[加倍、折扣、抵扣]
请求参数：
language=zh-CN（/public下需要此参数，/user下不需要）
返回：{
    "result":"success",
    "categories":[    //如果列表没有任何filter以供筛选时，也会返回一个空categories数组
        {
            "category":"scenario",    //筛选类别
            "text":"使用场景",    //文字描述，根据language的不同而显示不同的文字
            "filters":[
                {
                    "filter":"topup",
                    "text":"充值"
                },
                {
                    "filter":"buyInvite",
                    "text":"购买邀请码"
                }
            ]
        },
        {
            "category":"type",
            "text":"优惠方式",
            "filters":[
                {
                    "filter":"discount",
                    "text":"折扣"
                },
                {
                    "filter":" deduction"，
                    "text":"抵扣"
                }
            ]
        }
    ]
}

GET /xxx-sort
查询列表支持的sort（排序方式）
请求参数：
language:zh-CN（/public下需要此参数，/user下不需要）
返回：{
    "result":"success",
    "sorts":[    //如果列表没有任何sort以供排序时，也会返回一个空sorts数组
        {
            "sort":"name",    //用于和后端交互
            "text":"名字"    //用于显示至前端，根据language的不同而显示不同的文字
        }
    ]
}

GET /xxx-public 或/xxx-my 或/xxx-all
对列表进行分页查询
请求参数：
筛选：（可不写，视为查找所有type）
filter.scenario=topup&&filter.scenario=buyInvite&&filter.type=discount
语言：（/public下需要此参数，/user下不需要）
language=zh-CN
排序：（可不写，可写多个，不写时视为使用默认排序）
sort=name
每页容量：
number=10
页码：
page=1
是否查询完整内容：
full=true（false时仅返回id数组，true时返回完整内容）
full=false返回：{
    "result":"success",
    "ids":[1,2,3,4]
}
full=true返回：{
    "result":"success",
    "list":...    //根据不同的列表结构而返回不同的list内容
}

GET /xxx
对列表进行精确查询
请求参数：
id=123（可以同时查询多个id）
返回结果的结构与分页查询的full=true返回结构相同

前端既可以完全支持sort和type参数，允许用户对列表进行筛选和排序
也可以跳过sort和type直接使用full=true显示列表
也可以通过cookie保存sort和type等
```

