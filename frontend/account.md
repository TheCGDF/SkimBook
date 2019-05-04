---
description: 账户类API
---

# account

POST send-verification:

```text
发送注册或重置密码的验证码（注册时强制要求验证码）：{
    "email":"000@00.com",
    "language":"zh-CN",
    "type":1    //1注册验证码 2重置密码
}
```

POST login:

```text
登录：{
    "email":"111@11.com",
    "language":"zh-CN",
    "password":"ppp"
}
```

POST register:

```text
注册：{
    "email":"222@22.com",
    "password":"aaa",
    "verification":"vvv",    //邮箱验证码
    "invite":"aaa",    //邀请码
    "language":"zh-CN"    //根据当前页面的语言
}
```

POST password-new:

```text
修改密码：{
    "email":"333@33.com",
    "language":"zh-CN",
    "passwordNew":"sss",
    "verification":"vvv"    //邮箱验证码
}
```

