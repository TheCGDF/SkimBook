---
description: 需要登录才能调用的API
---
# user
## 列表查询
| 列表名 | 含义 |
| :- | :- |
| notice | 公告 |
| node | 节点 |
| menu | 节点菜单 |
| order | 订单 |
| finance | 财务 |
| invite | 邀请记录 |
| traffic | 流量记录 |
```
例：查询notice（公告）列表：
GET notice-columns
GET notice-list
GET notice-pick

格式同public下的notice列表查询，但不需要language参数
```
## 其他
### POST menu-adjust
>调整订单
```json
参数示例：{
    "Menus":[
        {
            "Id":"d134",
            "Operation":1,
        }
    ]
}
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| Menus | 菜单数组 | 是 |
| Menus:Id | 菜单id | 是 |
| Menus:Operation | 操作，1：立即激活，2：次周期激活,3：立即停用，4：次周期停用 | 是 |
### GET my
>返回用户信息
```json
成功返回：{
		"Email":"admin@skim.com",
		"Language":"en",
		"Download":15656,//单位B，下同
		"Upload":111,
		"Balance":12.5,//余额
		"Trial":15.6, //试用金
		..。//待定
}
```
## POST language-edit
>编辑用户语言
```json
参数示例：{
    "Language":"en"
}
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| Language | 新语言 | 是 |
### POST order-buy
>下订单
```json
参数示例：{
    "Menus":["6giuyo8"]
}
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| Menus | 菜单数组 | 是 |
### POST invite-buy
>购买邀请次数
```json
参数示例：{
    "Number":2
}
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| Number | 购买数 | 是 |
### POST cache-edit
>向机场存入客户端缓存
### GET cache:
>通过key查询指定缓存