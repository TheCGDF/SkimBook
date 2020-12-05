# 首页

## Skim Project
`Skim`仅为后端相关组件及协定的命名

本项目以**闭源**为主
>本项目仍然处于缓慢开发中

| 设计 | 说明 |
| :- | :- |
| 国际化 | 支持多个\[语言、货币、时区\] |
| 计费模式 | 使用`固定租金+流量计费`模式，同一节点可设置不同带宽（和固定租金）的套餐 |
| 管理权限 | 管理员可分配不同权限（读写用户资料、发布公告等），以实现“客服”、“运维”等角色 |
| 设置项 | 设置项保存于数据库，通过\[网站后台/客户端\]修改 |
| 负载均衡 | 后端和节点端均支持负载均衡，可通过多台服务器分摊压力 |
| 安全性 | 强制使用https和wss |
| websocket | 客户端<->后端<->节点端：使用websocket通信 |
| 客户端 | 后端实时向客户端推送\[节点更新、公告\]等；简易交流群（可以和群友或群内客服实时交流） |
| 无订阅 | 用户在网页端生成一次性登录链接，客户端一键登录，不再有订阅外泄风险 |
| 杂货铺 | 除了节点套餐还可以出售一些其他乱七八糟的东西，如美区iOS账户等，可配置自动发货 |
| skim logistics | 每个机场需要绑定1个skim logistics账户 |
| 插件支持 | skim拥有插件接口，由skim logistics提供插件市场支持，可上传出售或付费下载skim插件 |

[详细说明](https://book.skimproj.com/design)
### 链接
[详细设计及开发文挡](https://book.skimproj.com/)

[Telegram群组](https://t.me/skimproj)
### 后端售价模式
后端可免费或付费使用

免费版会作为小白鼠，强制自动更新至最新版

付费版按总用户数收费，需要在skim logistics预存余额，每30日结算
### demo
后端demo地址：[https://backend.skimproj.com](https://backend.skimproj.com/public/notice-columns)

测试示例：[https://backend.skimproj.com/public/notice-columns](https://backend.skimproj.com/public/notice-columns)

测试账户：admin@skimproj.com

测试密码：123456

| 配套项目 | 类型 | 作者 | 备注 |
| :- | :- | :- | :-
| [nsmash](https://nsmashtest.kokoharu.club/#/) | 网页前端 | [laurieryayoi](https://github.com/laurieryayoi) | 闭源发售
| [skive](https://github.com/TheCGDF/skive) | 网页前端+跨平台客户端 | [TheCGDF](https://github.com/TheCGDF/skive) | WTFPL协议开源

