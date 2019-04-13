# 插件类型

管理员可以通过管理员界面的“导入插件”上传插件（支持url和离线文件）并安装在负载均衡系统中，插件会安装到所有系统中插件名称仅能使用小写字母和数字并且以小写字母开头，不能包含大写字母、空格、下划线插件不应当读写操作系统中的文件



plugin包含以下类型：

### node 节点

* v2ray 
* shadowsocks 

当用户产生变更时，后端将调用插件向后端发送ws更新 前端需要节点信息时，后端将调用插件返回

### broadcast 广播 

* tgbot Telegram bot 
* dcbot Discord bot

### mail 邮件 

当需要发送邮件时，后端将调用插件进行邮件发送

### payment 支付 

* spay 
* f2fpay
* Trimepay 

可同时存在多个，需要register自己支持的支付手段以供用户选择

### currency 货币汇率 

可同时存在多个，需要register自己支持的货币手段以供用户选择

### language 语言 

可同时存在多个，需要register自己支持的语言以供用户选择

### ddns 

自动为节点分配两个前缀的二级域名，根据每个节点的key的md5值生成，并上报cloudflare



