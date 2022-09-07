module.exports={
cf:{ // cloudflare api配置
    email:'dbh2858304517',
    key:'8a5bfb10db4a44530094743d4d2431aacb836',
    zone_name:'幽香乐容'
},
mailer:{ // cloudflare api配置
    mailer:{
        host:"smtp.office365.com",
        port:587,
        auth:{
            user: "yxlr.tk@outlook.com",
            pass: "20081228dbh"
        }
    },
    from: "yxlr.tk<yxlr.tk@outlook.com>"
},
limit:{ // 限制
    per:3, // 每个邮箱最多享有几个二级域名
    minLength:3, // 二级域名前缀最小长度
    block:[] // 禁止注册的前缀
},
tips:{ // 提示
    WrongToken:'Wrong token!',
    WrongMaster:'This name has been registered by someone else',
    Accepted:'Accepted',
    Failed:'Failed',
    QuotaExceeded:'Quota exceeded!',
    IllegalName:'Illegal name!'
}
}
