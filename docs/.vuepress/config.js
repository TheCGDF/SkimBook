module.exports = {
    title: 'Skim Book',
    description: 'Just playing around',
    themeConfig: {
        nav: [{
            text: 'Home',
            link: '/'
        }, {
            text: 'Guide',
            link: '/guide/'
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
                path: '/node/',
                children: [
                    '/node/host-mark',
                    '/node/init',
                    '/node/adapter-push',
                    '/node/node-push',
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