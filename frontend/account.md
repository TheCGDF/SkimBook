# account

POST send-code:

```text
发送：{
    "email":"000@00.com"
}
```

POST login:

```text
发送：{
    "email":"111@11.com",
    "password":"ppp"
}
```

POST register:

```text
发送：{
    "email":"222@22.com",
    "password":"aaa",
    "verification":"vvv",    //邮箱验证码
    "invite":"aaa",    //邀请码
}
```

POST password-edit:

```text
发送：{
    "email":"333@33.com",
    "passwordNew":"sss",
    "verification":"vvv"    //邮箱验证码
}
```

POST email-edit:

```text
发送：{
    "email":"444@44.com",
    "emailNew":"555@55.com",
    "verification":"eee"
}
```

