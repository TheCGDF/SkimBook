# 验证

节点通过ws连接上node adapter后，adapter随机生成一段密码并用公钥加密，通过base64将\[\]byte转换为string发送给节点：

```text
{
    "element":"verify",
    "value":"xxxxxxxxxxxxxxx"
}
```

管理员打开web管理界面，将Pending的节点点击“确认”，adapter便开始发送更新json，根据"element"字段判断该进行的操作 【国际间网络波动可能会导致波动，traffic\_interval视为心跳包，如果ws连接断开，需要重连机制】 间隔/key更新:

```text
{
    "element":"verify",
    "value":"yyyyyyyyyyyyyyy",
    "key":""        //初次启动时，发送空key，以通知web端创建新节点并返回更新Key
}
```

