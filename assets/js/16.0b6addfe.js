(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{215:function(a,n,s){"use strict";s.r(n);var e=s(28),t=Object(e.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#account"}},[a._v("#")]),a._v(" account")]),a._v(" "),s("p",[a._v("POST mail-register:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('发送注册验证码（注册时强制要求验证码）\n\n请求体：{\n    "email":"000@00.com",\n    "language":2,\n    "captcha":{\n        "id":"...",\n        "value":"..."\n    }\n}\n')])])]),s("p",[a._v("POST mail-password：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('发送重置密码的验证码（注册时强制要求验证码）\n\n请求体：{\n    "email":"000@00.com",\n    "language":2,\n    "captcha":{\n        "id":"...",\n        "value":"..."\n    }\n}\n')])])]),s("p",[a._v("GET verification-password：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('判断重置验证码是否正确\n\n请求参数：\nverification:...\n\n返回：{\n    "result":1,\n    "message":"。。。"\n}\n')])])]),s("p",[a._v("POST password-new:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('修改密码\n\n请求体：{\n    "email":"333@33.com",\n    "language":2,\n    "password":"sss",\n    "verification":"..."    //验证码\n}\n')])])]),s("p",[a._v("POST login:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('登录\n\n请求体：{\n    "account":"111@11.com",    //此处可以是邮箱，也可以是用户的hashid\n    "language":2,    //用于决定登录错误时返回message的语言\n    "password":"ppp",\n    "expiry":9000,    //过期时间，单位：秒，最短不低于5秒，最大不超过30天\n    "captcha":{\n        "id":"...",\n        "value":"..."\n    }\n}\n\n成功返回：{\n    "result":1,\n    "message":"登录成功",    //不同的language会返回不同的message\n    "jwt":"...."\n}\n')])])]),s("p",[a._v("POST register:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('注册\n\n请求体：{\n    "email":"222@22.com",\n    "password":"aaa",\n    "verification":"vvv",    //邮箱验证码\n    "invite":"aaa",    //邀请码\n    "language":"zh-Hans"    //根据当前页面的语言\n}\n')])])]),s("p",[a._v("GET login:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("用于客户端的登录\n\n请求参数：\nauthorization:...///一次性授权\n\n使用方式：\n从网站中获取并复制“一次性登录授权”URL，内容类似于：\nhttps://www.xxx.com/login?authorization=1234qwer\n打开客户端，将该URL粘贴至登录界面，即可授权客户端登录\n授权成功后效果与POST login相同（返回jwt）\n")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);