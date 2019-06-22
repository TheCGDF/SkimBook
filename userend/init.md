---
description: 初次安设后端并启动后，需要调用的API，以完成初始化设置
---

# init

以下顺序有先后

POST database:

```text
设置数据库
```

GET config:

```text
获取需要配置的config
```

POST resource:

```text
将前端资源保存至数据库中（比如前端重置密码的url路径，前端配套的url模板）
```

