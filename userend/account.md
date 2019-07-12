---
description: 账户类API
---

# account

GET captcha：

```text
获取一个验证码显示到前端，返回：{
    "result":"success",
    "id":"...",    //验证码的id
    "picture":"..."    //一串base64，解码后是一张PNG
}
//后面也可能会有audio什么的。。。
```

POST mail-register:

```text
发送注册验证码（注册时强制要求验证码）：{
    "email":"000@00.com",
    "language":"zh-Hans",
    "captcha":{
        "id":"...",
        "value":"..."
    }
}
```

POST mail-password：

```text
发送重置密码的验证码（注册时强制要求验证码）：{
    "email":"000@00.com",
    "language":"zh-Hans",
    "captcha":{
        "id":"...",
        "value":"..."
    }
}
```

GET verification-password：

```text
判断重置验证码是否正确

请求参数：
verification:...

返回：{
    "result":"success",
    "message":"。。。"
}
```

POST password-new:

```text
修改密码：{
    "email":"333@33.com",
    "language":"zh-Hans",
    "password":"sss",
    "verification":"..."    //验证码
}
```

POST login:

```text
登录：{
    "account":"111@11.com",    //此处可以是邮箱，也可以是用户的hashid
    "language":"zh-Hans",    //用于决定登录错误时返回message的语言
    "password":"ppp",
    "expiration":9000,    //过期时间，单位：秒，最短不低于5秒，最大不超过30天
    "captcha":{
        "id":"...",
        "value":"..."
    }
}

成功返回：{
    "result":"success",
    "jwt":"...."
}
```

POST register:

```text
注册：{
    "email":"222@22.com",
    "password":"aaa",
    "verification":"vvv",    //邮箱验证码
    "invite":"aaa",    //邀请码
    "language":"zh-Hans"    //根据当前页面的语言
}
```

GET login:

```text
用于客户端的登录

请求参数：
authorization:...///一次性授权

使用方式：
从网站中获取并复制“一次性登录授权”URL，内容类似于：
https://www.xxx.com/login?authorization=1234qwer
打开客户端，将该URL粘贴至登录界面，即可授权客户端登录
授权成功后效果与POST login相同（返回jwt）
```

