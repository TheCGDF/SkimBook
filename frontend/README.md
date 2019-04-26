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
查询列表支持的type，用户可以通过type筛选显示列表内容
type使用场景：
node拥有shadowsocks和v2ray等type
finance拥有支出、收入等type
email发送记录拥有注册验证码、密码重置验证码、公告等type
请求参数：
language:zh-CN（/public下需要此参数，/user下不需要）
返回：{
    "result":"success",
    "types":[    //如果列表没有任何type以供筛选时，也会返回一个空type数组
        {
            "type":"shadowsocks",    //用于和后端交互
            "text":"shadowsocks"    //用于显示至前端，根据language的不同而显示不同的文字
        }
    ]
}

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

对列表进行分页查询
请求参数：
type:shadowsocks/v2ray（可不写，可写多个，不写时视为查询所有type）
language:zh-CN（/public下需要此参数，/user下不需要）
sort=name（可不写，可写多个，不写时视为使用默认排序）
number=10（每页多少个）
page:1（第几页）
full=true（false时仅返回id数组，true时返回完整内容）
full=false返回：{
    "result":"success",
    "ids":[1,2,3,4]
}
full=true返回：{
    "result":"success",
    "list":...    //根据不同的列表结构而返回不同的list内容
}

对列表进行精确查询
请求参数：
id=123（可以同时查询多个id）
返回结果的结构与分页查询的full=true返回结构相同

前端既可以完全支持sort和type参数，允许用户对列表进行筛选和排序
也可以跳过sort和type直接使用full=true显示列表
也可以通过cookie保存sort和type等
```

