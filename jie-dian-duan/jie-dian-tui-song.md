# 节点推送

节点推送流量：

```text
{
    "element":"traffic",
    "users":[
        {
            "email":"aaa@bb.com",  
            "download":"333",
            "upload":"222"
        }
    ]
}
```

节点推送测速：

```text
{
    "element":"speed",
    "operators":[
        {
            "brand":"ctcc",  //中国电信
            "ping":"12",
            "download":"34",
            "upload":"56"
        },
        {
            "brand":"cmcc",  //中国移动
            "ping":"12",
            "download":"34",
            "upload":"56"
        },
        {
            "brand":"cucc",  //中国联通
            "ping":"12",
            "download":"34",
            "upload":"56"
        }
    ]
}
```

节点推送异常：

```text
{
    "element":"exception",
    "type":"warning"/"error",
    "message":"xxx"
}
//如果是来自后端的json导致的，建议把那条json付在"message"里
//type为warning的时候插件依然会继续运行
//type为error时表示“啊，我死了”，后端会立即关闭连接
```





