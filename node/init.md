# 初始化验证

管理员新增节点时，首先启动节点端

节点端通过ws连接上adapter后，adapter遍历节点列表address查询与该ip匹配的第一个“状态为未连接”的节点，然后随机生成一段任意长度的密码并用公钥加密，通过base64将\[\]byte转换为string发送给节点：

```text
{
    "element":"verify",
    "ciphertext":"xxxxxxxxxxxxxxx"
}
```

节点解密后返回明文，并附上节点当前版本号：

```text
{
    "element":"verify",
    "plaintext":"xxxxx",
    "version":"1.2.3"
}
```



此时，管理员打开网站后台即可看到新增的节点端，并完成剩下的配置（比如设定菜单等）



adapter便开始发送更新json，根据"element"字段判断该进行的操作 【国际间网络波动可能会导致断开，trafficInterval视为心跳包，如果ws连接断开，需要重连机制】 间隔更新:

```text
{
    "element":"traffic",
    "interval":7200
}
//这里的间隔，应当用sleep实现而不是使用Timer
```

