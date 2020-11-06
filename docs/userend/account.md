---
description: 账户类API
---
# account
## POST mail-register
>发送注册验证码（注册时强制要求验证码）
```json
参数示例：{
    "Email":"000@00.com",
    "Language":"en",
    "Captcha":{
        "Id":"...",
        "Value":"..."
    }
}
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| Email | 邮箱 | 是 |
| Language | 语言 | 否，默认en |
| Captcha | 验证码 | 是 |
| Captcha:Id | 验证码id | 是 |
| Captcha:Value | 用户输入的验证码值 | 是 |
## POST mail-password
>发送重置密码的验证码（注册时强制要求验证码）
```json
参数示例：{
    "Email":"000@00.com",
    "Language":"zh-Hans",
    "Captcha":{
        "Id":"...",
        "Value":"..."
    }
}
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| Email | 邮箱 |是 |
| Language | 语言 | 否，默认en |
| Captcha | 验证码 | 是 |
| Captcha:Id | 验证码id | 是 |
| Captcha:Value | 用户输入的验证码值 | 是 |
## GET verification-password
>判断重置验证码是否正确
```
参数示例：verification=23d32a
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| verification | 验证码 | 是 |
```json
成功返回：{
    "Result":1,
    "Message":"..."
}
```
## POST password-new
>修改密码
```json
参数示例：{
    "Email":"000@00.com",
    "Language":"zh-Hans",
    "Captcha":{
        "Id":"...",
        "Value":"..."
    }
}
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| Email | 邮箱 | 是 |
| Language | 语言 | 否，默认en |
| Password | 新密码 | 是 |
| Verification | 邮箱验证码 | 是 |
## POST login
>登录
```json
请求示例：{
    "Email":"111@11.com",
    "Language":"zh-Hans",
    "Password":"ppp",
    "Expiry":9000,
    "Captcha":{
        "Id":"...",
        "Value":"..."
    }
}
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| Email | 邮箱 | 是 |
| Language | 语言 | 否，默认en |
| Password | 密码 | 是 |
| Expiry | JWT过期时间，5秒~30天，单位秒 | 是 |
| Captcha | 验证码 | 是 |
| Captcha:Id | 验证码id | 是 |
| Captcha:Value | 用户输入的验证码值 | 是 |
```json
成功返回：{
    "Result":1,
    "Jwt":"...."
}
```
## POST register
> 注册
```json
请求示例：{
    "Email":"222@22.com",
    "Password":"aaa",
    "Verification":"vvv",
    "Invite":"aaa",
    "Language":"zh-Hans"
}
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| Email | 邮箱 | 是 |
| Password | 密码 | 是 |
| Verification | 邮箱验证码 | 是 |
| Invite | 邀请码 | 否 |
| Language | 语言 | 是 |
## GET login
> 用于客户端的一链登录，首先在web中获取一次性登录链接，再导入客户端，省去输入网站网址、账户、密码

| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| authorization | 一次性授权链接 | 是 |
```
请求参数：
authorization:...///一次性授权

使用方式：
从网站中获取并复制“一次性登录授权”URL，内容类似于：
https://www.xxx.com/login?authorization=1234qwer
打开客户端，将该URL粘贴至登录界面，即可授权客户端登录
授权成功后效果与POST login相同（返回jwt）
```

