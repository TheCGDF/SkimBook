# adapter推送

下发安装指定版本指令：

```
{
    "Element":"version",
    "Semver":"1.2.*"
}

//这里使用语义化版本
//https://semver.org/lang/zh-CN/
```

如果web端启用了v2ray，则会收到v2ray的json：

```
v2ray配置更新：{
    "Element": "v2ray",
    "Operation": "config",
    "InboundConfig": {
        "Port": 443,
        "GrpcApiPort": 2333,
        "Tag":"xxx",     //需要唯一性,如果缺失则使用默认tag
        "Protocol": "vmess",    //"shadowsocks" (这里的ss拿来做ss+ws的提示，user信息还是按照ss信息给我就好)
        "StreamSettings": {
            "Network": "tcp", // "ws","kcp"
            "KcpSettings": {
                "Header": {
                    "Type": "none"
                }
            },
            "WsSettings": {
                "Path": "/",
                "Headers": {
                    "Host": "v2ray.com"
                }
            },
            "TlsSettings": {
                "ServerName": "server.com"
            }
        }

    }
}

v2ray用户变更：{
   "Element":"v2ray",
    "Operation":"user",
    "Removes":[
        {"Email":"uuu@vv.com"}    //删除时只有email字段
    ],
    "Updates":[    //新增、更新
        {
            "Email":"ccc@dd.com",
            "Uuid":"xxxxxxxxx",
            "Speed": 40,
            "Language":1,
            //用户的语言，用于显示审计规则等文字
            "State":1/2/3/4,
            //1：正常 2：过期 3：[余额/流量]耗尽 4：被禁止使用
            //如果State不为1，用户访问任何页面都只会显示提示文字            
            "AlterId": 2 //默认2 
        }
    ]
}
//先处理remove再处理update
```

审计规则json：

```
规则变更：{
    "Element":"censorship",
    "Removes":[
        {"HashId":"..."}    //id不是数字，而是字符串（hash id）
    ],
    "Update":[
        {
            "HashId":"...",
            "Rule":".*"
        }
    ]
}

//推荐使用DFA(确定有限状态机)实现，而不是遍历审计规则查看是否符合审计
```

