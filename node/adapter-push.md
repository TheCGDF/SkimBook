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
            "dam":"禁止通过本站代理访问此页面",
            //如果该用户触发了审计规则，则会显示该行文字
            //为什么要每个用户都设置一个dam？因为用户的Language不同，dam的文字也会不同
            
            "alterId": 2 //默认2 
        }
    ],
    "dams":[    //此类用户访问任何链接都会被截断并且显示text
        {
            "email":"...",
            "text":"余额耗尽，请充值。"
        }
    ]
}
//先处理remove再处理update和dams
```

如果web端启用了shadowsocks，则会收到shadowsocks的json：

```text
ss用户新增：{
    "element":"shadowsocks",
    "operation":"user",
    "removes":[
        {"email":"uuu@vv.com"}      //删除时只有email字段
    ],
    "updates":[
        {
            "email":"sss@dd.com",
            "dam":"禁止通过本站代理访问此页面",
            //如果该用户触发了审计规则，则会显示该行文字
            //为什么要每个用户都设置一个dam？因为用户的Language不同，dam的文字也会不同
            "speed": 50,
            "port": 110,
            "password":"xxxx",
            "method":"chacha20-ietf"
        }
    ],
    "dams":[    //此类用户访问任何链接都会被截断并且显示text
        {
            "email":"...",
            "text":"您已被管理员禁用节点使用权"
        }
    ]
}
//先处理remove再处理update和dams
```

