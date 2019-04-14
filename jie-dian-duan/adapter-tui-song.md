# adapter推送

adapter推送的内容由web端插件控制

如果web端安装了v2ray插件，则会收到v2ray的json：

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

v2ray用户新增：{
    "element":"v2ray",
    "operation":"userAdd",
    "users":[
        {
            "email":"ccc@dd.com",
            "uuid":"xxxxxxxxx",
            "speed": 40,
            "alterId": 2 //默认2 
        }
    ]
}

v2ray用户更新：{
    "element":"v2ray",
    "operation":"userUpdate",
    "usersOld":[
        {
            "email":"uuu@vv.com"    //email作为v2ray的用户标识，仅需提供email
        }
    ],
    "usersNew":[
        {
            //此处同上方新增
        }
    ]
}

v2ray用户删除：{
    "element":"v2ray",
    "operation":"userRemove",
    "users":[
        "uuu@vv.com"      //删除时只有email字段
    ]
}
```

如果web端安装了shadowsocks插件，则会收到shadowsocks的json：

```text
ss用户新增：{
    "element":"shadowsocks",
    "operation":"userAdd",
    "users":[
        {
            "email":"sss@dd.com",
            "speed": 50,
            "port": 110,
            "password":"xxxx",
            "method":"chacha20-ietf"
        }
    ]
}

ss用户更新：{
    "element":"shadowsocks",
    "operation":"userUpdate",
    "usersOld":[
        {
            "email":"uuu@vv.com",  //email作为ss的用户标识，仅需提供email
        }
    ],
    "usersNew":[
        {
            //此处同上方新增
        }
    ]
}

ss用户删除：{
    "element":"shadowosocks",
    "operation":"userRemove",
    "users":[
        {"email":"uuu@vv.com"}      //删除时只有email字段
    ]
}
```

