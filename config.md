# 配置

version:

```text
description:后端版本
type:string
importance:low
value:"j5gkl8"
permission:readonly
```

website\_domain:

```text
description:网站url，不包含“http://”等scheme（skim支持且仅支持https和wss）
type:string
restriction:domain
importance:high
```

website\_name:

```text
description:网站名
type:string
importance:high
```

redis\_address:

```text
description:redis(adapter)地址
type:string
restriction:address
value:l27.0.0.1
importance:low
```

redis\_password:

```text
description:
type:string
restriction:password
value:5ju67tjhhu
importance:low
```

redis\_database:

```text
description:
type:string
value:skim
importance:low
```

register\_mode:

```text
description:注册模式
type:array
restriction:open,close,invite
value:open
importance:low
```

action\_timeout:

```text
description:数据库保留action记录的时间，单位：天
type:integer
value:=30
restriction:>= 0
importance:low
```

invitation\_start:

```text
description:初始邀请码可用次数
type:integer
value:10
restriction:>= -1
importance:middle
```

invitation\_reward:

```text
description:邀请奖励余额
type:decimal
value:1
importance:middle
```

invitation\_grace:

```text
description:被邀请者奖励余额
type:decimal
value:1
importance:middle
```

invitation\_price:

```text
description:邀请次数价格
type:decimal
value:1
importance:middle
```

invitation\_binding:

```text
description:邀请绑定充值返利百分比
type:decimal
value:20
importance:middle
```

invitation\_binding\_timeout:

```text
description:绑定充值返利过期时间（天）
type:integer
value:0
restriction:>= 0
importance:middle
```

invitation\_binding\_times:

```text
description:绑定充值返利可用次数
type:integer
value:10
restriction:>= -1
importance:middle
```

finance\_timeout:

```text
description:数据库保留finance记录的时间，单位：秒
type:integer
value:0 (永不过期)
restriction:>= 0
importance:middle
```

language:

```text
description:网站默认语言（用户可自行更改）
type:array
restriction:zh-CN,.....
value:zh-CN
importance:low
```

currency:

```text
description:网站最终结算货币
type:array
restriction:CNY,...
value:CNY
importance:low
```

timezone:

```text
description:网站时区
type:array
restriction:Asia/Shanghai
value:Asia/Shanghai
importance:low
```

