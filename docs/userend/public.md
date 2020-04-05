---
description: 公共API，无需登录即可调用
---
# public
public中所有API的请求都需要`language`参数
Culture Name| Locale Language Country/Region | Locallanguage name
:- | :- | :- |
en | English | English
zh-Hans | Chinese (Simplified) | 中文（简体）
参考：[https://www.cnblogs.com/binsys/articles/2278679.html](https://www.cnblogs.com/binsys/articles/2278679.html)
## 列表查询
| 列表名 | 含义 |
| :--- | :--- |
| notice | 公告 |
| node | 节点 |
| menu | 节点菜单 |
```
例：查询notice（公告）列表：
GET notice-columns
GET notice-list
GET notice-pick
```
## 其他
### GET captcha
>获取一个验证码显示到前端
```
请求示例：language=en&width=220&height=120
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| language | 语言 | 否，默认en |
| width | 图片宽度，单位pixel，上限280 | 是 |
| height | 图片高度，单位pixel，上限280 | 是 |
```
成功返回：{
    "Result":1,
    "HashId":"...",    //验证码的id
    "Picture":"..."    //一串base64，解码后是一张PNG
}
//后面也可能会有audio什么的。。。
```
### GET default
>获取默认配置
```
请求示例：language=en
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| language | 语言 | 否，默认en |
```json
成功返回：{
    "Result":1,
    "Languages":"en",    //默认语言    
    "Timezone":"Asia/Shanghai",    //本站使用的时区
    //https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    //数据库总是以设定的时区存储
    //除非特别说明，API默认返回设定的时区    
    "Currency":"CNY",    //最终结算货币
    //https://en.wikipedia.org/wiki/ISO_4217
    "Cycle":7    //本站账单周期
}
```
### GET resource
>获取资源（比如背景图什么的）
```
请求示例：language=en&name=background-public
```
| 请求参数 | 说明 | 是否必须 |
| :- | :- | :- |
| language | 语言 | 否，默认en |
| name | 资源名 | 是 |
```json
成功返回：{
    "Result":1,
    "Resource":"..."
}
```

