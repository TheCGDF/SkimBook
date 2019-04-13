# API Router

后端API router:

用户初次使用启动后端时，任何链接会强制跳转到init界面，直到初始化配置完成

```text
init/
    G config        获取初始所需配置
    P config-edit   设置初始配置

G node  无需登录浏览节点信息

account/
    P send-code     发送验证码  {email:用户邮箱}
    P login         处理登录    {email:用户邮箱     password:用户密码}
    P register      处理注册    {email:用户邮箱     password:用户密码   code:注册验证码}
    P new-password  新密码      {email:用户邮箱     newPassword:新密码  code:更新验证码}
    P new-email     新邮箱      {email:用户邮箱     newEmail:新邮箱     code:更新验证码}

user/
    //G user              获取账户信息
    G node              获取指定节点详情    {nodeId:节点Id}
    //G node-list         节点简略列表
    P node-edit         编辑节点配置
    G notice-all        所有公告
    G order             获取已购节点
    P menu-order        订购指定节点        {nodeIdList:节点Id数组}
    G finance           资金变动情况        {分页参数}
    G affiliate         获取返利情况        {分页参数}
    G traffic           流量记录
    P invitation-buy    购买邀请资格

    admin/
        G role          获取角色
        G role-all      所有角色
        P role-edit     编辑角色
        G coupon-all    所有优惠码
        P coupon-edit   编辑优惠码        
        G action        所有动作
        P action-record 记录动作
        G user-all      所有用户            {分页参数}
        P user-edit     [编辑/创建]用户     {userId:用户Id...}
        P node-edit     [编辑/创建]节点     {nodeId:节点Id...}
        G node-all      所有节点
        P notice-edit   [编辑/创建]公告     {noticeId:公告Id...}
        G order-all     所有订购情况
        G config        配置项
        P config-edit   编辑配置项
        G finance-all   所有资金变动        {分页参数}
        G affiliate-all 所有返利            {分页参数}
        G traffic-all   所有流量记录        {分页参数}


plugin/
    shadowsocks/

    G info  获取ss配置？
```

