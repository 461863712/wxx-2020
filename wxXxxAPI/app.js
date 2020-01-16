var express=require('express');
var app =express();
var bodyParser = require('body-parser'); 
//引用bodyParser 这个不要忘了写
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
 });
var list=[
    {
        title: "教父",
        wish_count:"77",
        collect_count:"77",
        rating_average:"9.2",
        summary:"和克拉斯爱丽丝的卡拉拉升阶段卡拉卡拉圣诞节卡拉阿里就打开拉萨离开加拉岁的卢卡斯案例爱睡懒觉到了啊啊老师大家拉山口案例金克拉爱丽丝大家",
        imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
        isHighlyRecommended:true,/*是不是博主强烈推荐*/
        id:77,
        star:4
    },
    {
        title: "泰坦尼克号",
        wish_count:"88",
        collect_count:"88",
        rating_average:"9.1",
        summary:"介绍",
        imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
        isHighlyRecommended: true,/*是不是博主强烈推荐*/
        id:88,
        star:3
    },
    {
        title: "这个杀手不太冷",
        wish_count:"99",
        collect_count:"99",
        rating_average:"8.2",
        summary:"介绍",
        imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
        isHighlyRecommended: false,/*是不是博主强烈推荐*/
        id:99,
        star:4
    }
]
 var questions=[
     {
         title:'正在热映',
         id:1,
         list:[
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             }
         ]
     },
     {
         title:'人气电影',
         id:2,
         list:[
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             }
         ]
     },
     {
         title:'最新电影',
         id:3,
         list:[
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             }
         ]
     }
 ];
 var questionMore=[
     {
         title:'正在热映',
         id:1,
         list:[
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             },
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             },
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             },
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             },
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             }
         ]
     },
     {
         title:'人气电影',
         id:2,
         list:[
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             },
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             },
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             },
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             },
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             }
         ]
     },
     {
         title:'最新电影',
         id:3,
         list:[
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             },
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             },
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             },
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             },
             {
                 title: "教父",
                 wish_count:"77",
                 collect_count:"77",
                 rating_average:"9.2",
                 summary:"介绍",
                 imagePath:"https://bpic.588ku.com/element_banner/20/19/12/34d7cfff3272e83f9108e674e300f495.gif",
                 isHighlyRecommended:true,/*是不是博主强烈推荐*/
                 id:77,
                 star:4
             },
             {
                 title: "泰坦尼克号",
                 wish_count:"88",
                 collect_count:"88",
                 rating_average:"9.1",
                 summary:"介绍",
                 imagePath: "https://i0.hdslb.com/bfs/sycp/creative_img/201912/66ec7fecca55b3d0052ec8beb52deab8.jpg",
                 isHighlyRecommended: true,/*是不是博主强烈推荐*/
                 id:88,
                 star:3
             },
             {
                 title: "这个杀手不太冷",
                 wish_count:"99",
                 collect_count:"99",
                 rating_average:"8.2",
                 summary:"介绍",
                 imagePath: "https://i2.hdslb.com/bfs/archive/2951b25af3b1ca88ec71fb97ffcbacee20b3ff0b.jpg@336w_190h.webp",
                 isHighlyRecommended: false,/*是不是博主强烈推荐*/
                 id:99,
                 star:4
             }
         ]
     }
 ];
app.get('/movie/list',function(req,res){
    res.status(200);
    res.json(questions);
});
app.get('/movie/more/list',function (req,res) {
    var id=req.query.id;
    switch (id) {
        case "1":
            res.status(200);
            res.json(questionMore[0]);
            break;
        case "2":
            res.status(200);
            res.json(questionMore[1]);
            break;
        case "3":
            res.status(200);
            res.json(questionMore[2]);
            break;
        default:
            break;
    }
});
app.get('/movie/detail',function(req,res){
    var id=req.query.id;
    switch (id) {
        case "77":
            res.status(203);
            res.json(list[0]);
            break;
        case "88":
            res.status(203);
            res.json(list[1]);
            break;
        case "99":
            res.status(203);
            res.json(list[2]);
            break;
        default:
            break;
    }
});
//写个接口123
app.get('/movie',function(req,res){
    var movieId=parseInt(req.url.split("?")[1]);
    switch (movieId) {
        case 77:
            res.status(200);
            res.json(questions[0]);
            break;
        case 88:
            res.status(200);
            res.json(questions[1]);
            break;
        case 99:
            res.status(200);
            res.json(questions[2]);
            break;
        default:
            break;
    }
    });
//配置服务端口
var server = app.listen(3001, function () {

    var host = server.address().address;

     var port = server.address().port;

        console.log('Example app listening at http://%s:%s', host, port);
    })