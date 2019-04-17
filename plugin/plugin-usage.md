# 后端使用插件过程

### 插件鉴权

后端启动插件后，插件被标记为"launching"

插件连接上后端后，插件会被标记为"loading"，如果超时3秒未连接，插件会被标记为"failed"

 后端在检测到连接后，会将自己内置的RSA公钥（即，和节点通信的那个RSA公钥）使用md5编码后发送给后端鉴权：

```text
{ "element":"verify", "value":"xxxxx" }
```

后端返回：

```text
{
    "element":"verify",
    "version":1    //int，从1开始。如果校验失败就返回0
}
```

### 插件准备启动信息

#### 插件需要数据库信息

如果插件需要数据库连接：

```text
{
    "element":"database",
    "operation":"connection"
}
```

后端传达数据库连接：

```text
{
    "element":"database",
    "operation":"connection",
    "address":"xxx",
    "port":"jjjj",
    "password":"jjj",   //会为插件专门设置一个plugin用户，只拥有读取权限
    ...
}

```

如果后端需要使用自己表：

```text
{
    "element":"database",
    "operation":"table",
    "tables":[
        {"name":"yyy"}
    ]
}
//会检查数据库是否存在名为 "plugin_"+"插件名"+"_yyy"的数据表，如果不存在，则创建（无任何字段）
//插件可以任意操作自己创建的数据表，但是对其他数据表只拥有读取权限
//插件自己Sync字段
```

插件发送自己的初始配置：

```text
{
    "element":"config",
    "configs":[
        {
            "name":"plugin_mailgun_domain",
            //插件的name必须是"plugin"+插件名+配置名
            //插件的
            "importance":"low",
            "value":"8",
            "type":"int",
            "limit":
        }
    ]
}
//发送时，如果后端发现数据库中没有这些配置，会为数据库新增这些配置
```

#### 插件准备完成后，向后端发送：

```text
{
    "element":"status",
    "value":"running"
}
//超时10秒未准备好会被标记为stuck ？
```

后端每次发送命令时都会附上config:

```text
{
    "element":"send",    //email插件的send
    "configs":[
        //同上方
    ]
    "sender":"sss@qq.com",
    ...
}
//插件的config会和后端的config拥有完全相同的属性，其他文件再讲
```

### 后端要求插件尽快运行并退出

```text
{
    "element":"exit"    //每个插件最多等待10秒
}
```

### 异常报告

插件如果遇到异常，向后端发送:

```text
{
    "element":"exception",
    "type":"warning"/"error",
    "message":"xxx"
}
//如果是来自后端的json导致的，建议把那条json付在"message"里
//type为warning的时候插件依然会继续运行
//type为error时表示“啊，我死了”，后端会立即关闭连接
//message是经过base64编码的
```

