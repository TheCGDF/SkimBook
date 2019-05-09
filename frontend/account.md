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
    "language":"zh-CN",
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
    "language":"zh-CN",
    "path":"xxx?vv",    //比如这里填xxx?vv，重置邮件中的url就是"www.???.com/xxx?vv=...."
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
    "language":"zh-CN",
    "password":"sss",
    "verification":"..."    //验证码
}
```

POST login:

```text
登录：{
    "email":"111@11.com",
    "language":"zh-CN",
    "password":"ppp",
    "expiration":24,    //单位：小时（分？秒？）
    "captcha":{
        "id":"...",
        "value":"..."
    }
}
```

POST register:

```text
注册：{
    "email":"222@22.com",
    "password":"aaa",
    "verification":"vvv",    //邮箱验证码
    "invite":"aaa",    //邀请码
    "language":"zh-CN",    //根据当前页面的语言
    "captcha":{
        "id":"...",
        "value":"..."
    }
}
```



