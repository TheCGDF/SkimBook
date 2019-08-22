# 节点推送

节点推送流量：

```text
{
    "element":"traffic",
    "users":[
        {
            "email":"aaa@bb.com",  // 如果节点有多个tag，则一起上报所有tag的同个用户流量状况
            "download":"333",
            "upload":"222"
        }
    ]
}
```

节点\[推送/返回\]异常：

```text
{
    "element":"exception",
    "type":1/2,
    "message":"xxx"
}
//如果是来自adapter的json导致的异常，建议把那条json附在"message"里以便定位问题
//type为1时插件依然会继续运行
//type为2时表示“啊，我死了”，后端会立即关闭连接
```

节点推送碰撞审计规则记录？



