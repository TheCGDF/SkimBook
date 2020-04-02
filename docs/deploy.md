# 部署

部署本项目前，推荐准备好以下内容：
| 内容 | 说明 |
| :--- | :--- |
| 域名和TLS证书 | Skim强制使用https和wss |
| CDN | 例：Cloudflare |
| 邮件接口 | 例：Mailgun |
| 支付接口 | 例：支付宝当面付 |
| 多台VPS（CentOS7/8） | 安装节点端 |
之后，根据自己的规模选择合适的类型
## 一体型
后端仅安装与一台VPS上

推荐准备以下内容：
| 内容 | 说明 |
| :--- | :--- |
| 一台VPS（CentOS7/8） | 安装Skim后端 |
| PostgreSQL | 数据库，可以和后端安装于同一台VPS，也可以自行购买接口 |
## 负载均衡型
后端安装在多台VPS上，以拥有更强的处理能力

推荐准备好以下内容：
| 内容 | 举例 |
| :--- | :--- |
| 负载均衡器 | 例：Amazon ELB |
| 多台VPS（CentOS8） | 安装Skim后端 |
| 一台VPS（CentOS8） | 安装Adapter，用于关联所有Skim后端 |
| Redis | 可以和Adapter安装于同一台VPS，也可以自行购买接口 |
| PostgreSQL | 数据库，可以和Adapter安装于同一台VPS，也可以自行购买接口 |