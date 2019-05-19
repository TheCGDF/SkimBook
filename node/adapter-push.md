# adapter推送

间隔更新：

```text
{
    "element":"speed"/"traffic",
    "operation":"interval",
    "value":"7200"
}
//这里的间隔，应当用sleep实现而不是使用Timer
```

其余推送的内容由web端插件控制

如果web端启用了v2ray，则会收到v2ray的json：

```text
v2ray配置更新：{
    "element": "v2ray",
    "operation": "config",
    "inboundConfig": {
        "port": 443,
        "grpcApiPort": 2333,
        "tag":"xxx",     //需要唯一性,如果缺失则使用默认tag
        "protocol": "vmess",    //"shadowsocks" (这里的ss拿来做ss+ws的提示，user信息还是按照ss信息给我就好)
        "streamSettings": {
            "network": "tcp", // "ws","kcp"
            "kcpSettings": {
                "header": {
                    "type": "none"
                }
            },
            "wsSettings": {
                "path": "/",
                "headers": {
                    "Host": "v2ray.com"
                }
            },
            "tlsSettings": {
                "serverName": "server.com"
            }
        }

    }
}

v2ray用户变更：{
    "element":"v2ray",
    "operation":"user",
    "removes":[
        {"email":"uuu@vv.com"}    //删除时只有email字段
    ],
    "updates":[    //新增、更新
        {
            "email":"ccc@dd.com",
            "uuid":"xxxxxxxxx",
            "speed": 40,
            "language":"zh-Hans",
            //用户的语言，用于显示审计规则等文字
            "state":"normal","expired","exhausted","restricted",
            //用户状态：正常，过期，[余额/流量]耗尽，被禁止使用
            //如果用户不为normal，用户访问任何页面都只会显示提示文字            
            "alterId": 2 //默认2 
        }
    ]
}
//先处理remove再处理update
```

如果web端启用了shadowsocks，则会收到shadowsocks的json：

```text
ss用户变更：{
    "element":"shadowsocks",
    "operation":"user",
    "removes":[
        {"email":"uuu@vv.com"}      //删除时只有email字段
    ],
    "updates":[
        {
            "email":"sss@dd.com",
            "language":"zh-Hans",
            "state":"normal","expired","exhausted","restricted",
            "speed": 50,
            "port": 110,
            "password":"xxxx",
            "method":"chacha20-ietf"
        }
    ]
}
//先处理remove再处理update
```

审计规则json：

```text
规则变更：{
    "element":"censorship",
    "removes":[
        {"id":"1"}
    ],
    "update":[
        {
            "id":2,
            "rule":".*"
        }
    ]
}

//推荐使用DFA(确定有限状态机)实现，而不是遍历审计规则查看是否符合审计
```

