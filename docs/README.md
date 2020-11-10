# 首页

## Skim Project
`Skim`仅为后端相关组件及协定的命名

本项目以**闭源**为主
>本项目仍然处于缓慢开发中

| 设计 | 说明 |
| :- | :- |
| 国际化 | 支持多个\[语言、货币、时区\] |
| 计费模式 | 使用`固定租金+流量计费`模式 |
| 管理权限 | 管理员分配不同权限（读写用户资料、发布公告等），以实现“客服”、“运维”等角色 |
| 设置项 | 设置项保存于数据库，通过\[网站后台/客户端\]修改 |
| 负载均衡 | 后端和节点端均支持负载均衡，可以通过多台服务器分摊压力 |
| 安全性 | 强制使用https和wss |
| websocket | 客户端<->后端<->节点端：使用websocket通信。后端实时向客户端推送\[节点更新、公告\]等 |
| 无订阅 | 用户在网页端生成一次性登录链接，客户端一键登录，不再有订阅外泄风险 |
| 插件支持 | 提供插件接口，内置插件市场，可上传出售或付费下载 |
### 链接
[详细设计及开发文挡](https://book.skimproj.com/)

[Telegram群组](https://t.me/skimproj)
### demo
后端demo地址：[https://backend.skimproj.com](https://backend.skimproj.com/public/notice-columns)

测试示例：[https://backend.skimproj.com/public/notice-columns](https://backend.skimproj.com/public/notice-columns)

测试账户：admin@skimproj.com

测试密码：123456

| 配套项目 | 类型 | 作者 | 备注 |
| :- | :- | :- | :-
| [nsmash](https://nsmashtest.kokoharu.club/#/) | 网页前端 | [laurieryayoi](https://github.com/laurieryayoi) | 闭源发售
| [skive](https://github.com/TheCGDF/skive) | 网页前端+跨平台客户端 | [TheCGDF](https://github.com/TheCGDF/skive) | WTFPL协议开源

