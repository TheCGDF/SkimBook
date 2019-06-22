---
description: 管理员在/admin下的操作会被记录到数据库中
---

# admin

## 访问方式

和/user一样，/admin也使用JWT授权访问。不同的是，/admin还可以使用token访问

例如：

现有一个`POST /admin/balanceAdd`API，可以对指定用户的余额进行改变

管理员通过用户端，使用包含user信息的JWT访问该API，便会在数据库留下“管理员aaa在bbb时间给用户ccc加了余额ddd元”

此时假设需要开发一个Telegram bot，用户每天可以通过`/surprise`随机增加0~2元余额

其中，“增加余额”这一部分功能也是调用`POST /admin/balanceAdd`实现，但是对于Telegram Bot，可以在POST参数中写入`"token":"..."`来实现访问，token访问不会对应至具体用户，且只要管理员不删除便永久可用

## 列表查询

role（角色）、coupon（优惠券）、action（操作记录）、user（用户列表）、node（节点列表）、order（订单列表）、finance（财务记录）、invite（邀请记录）、traffic（流量记录）

```text
例：查询role（角色）列表：
role-column
role-list
role
role-edit
```

## 其他

GET config

POST config-edit

