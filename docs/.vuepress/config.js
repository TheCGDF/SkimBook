module.exports = {
    base: '/',
    title: 'Skim Book',
    description: 'Just playing around',
    themeConfig: {
        nav: [{
            text: 'Home',
            link: '/'
        }, ],
        sidebar: [{
                title: '首页',
                path: '/'
            },
            {
                title: '设计',
                path: '/design'
            },
            {
                title: '用户端（前端/客户端）',
                path: '/userend/',
                children: [
                    '/userend/init',
                    '/userend/public',
                    '/userend/account',
                    '/userend/user',
                    '/userend/admin',
                    '/userend/connection',
                ]
            },
            {
                title: '节点端',
                path: '/nodeend/',
                children: [
                    '/nodeend/host-mark',
                    '/nodeend/init',
                    '/nodeend/adapter-push',
                    '/nodeend/node-push',
                ]
            },
            {
                title: '部署',
                path: '/deploy'
            },
            {
                title: '开源引用（后端）',
                path: '/reference'
            },
        ]
    }
}
