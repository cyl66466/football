import Util from '../../util/common'
import * as types from '../types'
const state = {
    newsList : [
        {
            user_photo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=966423076,1705211373&fm=27&gp=0.jpg',
            user_name: '球探君',
            news_time: '2018-03-30',
            news_text: '你心目中最适合射门的五款足球鞋',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-26/37cedcf8a13a842e6e096f73062bc8be.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_location: '深圳市龙岗区方兴科技园',                        
            news_love: '666',
            news_comments: '175'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/150114677910414.jpg?imageView2/0/w/68/h/68/interlace/1',            
            user_name: 'CYL66',
            news_time: '2018-03-30',
            news_text: '新年为主队喝彩！春节精彩足球赛事回顾',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-23/9e5b2751af7cfe52408fca84b91b4a95.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '53',
            news_comments: '93'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/media/201708/2916/bc689f84b9771b7611ead3a88e1c0ebd.jpg',
            user_name: '你大爷',
            news_time: '2018-03-30',
            news_text: ' 经典回顾：耐克的足球界敲门砖，传奇成就无数传奇',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-14/554d0c0290fcc987efc5ba1c43c26746.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '451',
            news_comments: '663'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/app/20170427/01c8446e-0d44-4d43-be37-cb390265914b.jpg?imageView2/0/w/68/h/68/interlace/1',
            user_name: '小小西',
            news_time: '2018-03-30',
            news_text: 'V字形步法 | 助你摆脱防守',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-11/cb19f1c08726dbb02e18db7b8d89dc6c.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '66',
            news_comments: '782'
        },
        {
            user_photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519795840613&di=bf2fc2accf82e97e0a4e464b917d1ef8&imgtype=0&src=http%3A%2F%2Fimg003.21cnimg.com%2Fphotos%2Falbum%2F20130306%2Fm600%2FA40CF475EC521DBC6D94E8192BD9DB51.jpeg',
            user_name: '广州恒大',
            news_time: '2018-03-30',
            news_text: '经典回顾：重出江湖的猎鹰系列，只是在消费情怀？',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-13/8eb6e6e68b7c30a94bd0d6931723f7bc.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_location: '广州市天河区天河体育场',            
            news_love: '565',
            news_comments: '712'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/app/20170130/55596733-749c-489a-b447-d3461f9363e9?imageView2/0/w/68/h/68/interlace/1',
            user_name: '型男',
            news_time: '2018-03-30',
            news_text: '足球训练小贴士——提高传球精准度',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-01/6f094de91479fd4c312ff8f580554b21.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '36',
            news_comments: '87'
        },
        {
            user_photo: 'https://shihuo.hupucdn.com/app/20170929/47db2887-f643-4a45-9702-82ca74cde372.jpg?imageView2/0/w/68/h/68/interlace/1',
            user_name: '识货',
            news_time: '2018-03-30',
            news_text: '耐克高颜值战靴——Motion Blur系列套装测评',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-01/733c4c81ca8da2adae7dc0ebbe51ae31.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_location: '杭州市萧山区市心北路',            
            news_love: '87',
            news_comments: '962'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/app/20170809/f8351b91-9a85-4791-af9b-3522687ee550.jpg?imageView2/0/w/68/h/68/interlace/1',
            user_name: '胡66胡',
            news_time: '2018-03-30',
            news_text: '未来已经到来！走近彪马全新FUTURE系列',
            news_img: 'http://shihuo.hupucdn.com/article/2018-01-30/834226fc9758be32b8c85483d7ce98ec.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '88',
            news_comments: '448'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/146968064710526.jpg?imageView2/0/w/68/h/68/interlace/1',
            user_name: '房间',
            news_time: '2018-03-30',
            news_text: ' 阿迪达斯控制型球鞋PK ——Predator 18+ VS ACE 17+',
            news_img: 'http://shihuo.hupucdn.com/article/2018-01-27/16a5fcea5c282de6305e5d54c416cc32.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '445',
            news_comments: '995'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/app/20170703/de9f6de3-8f56-4f35-be6f-857f27eb38a0.jpg?imageView2/0/w/68/h/68/interlace/1',
            user_name: '大卫.贝克汉姆',
            news_time: '2018-03-30',
            news_text: '英雄的武器——球星赛场特别版战靴集合',
            news_img: 'http://shihuo.hupucdn.com/article/2018-01-16/e5aafdc56af263ac29249b38ded6bf5f.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '47',
            news_comments: '242'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/app/20170707/f42c931f-d75f-48aa-9938-c7595aa80a22.jpg?imageView2/0/w/68/h/68/interlace/1',
            user_name: '英吹斯汀',
            news_time: '2018-03-30',
            news_text: '再见足球精灵！小罗退役，从此再也看不到那么带感的“牛尾巴”',
            news_img: 'http://shihuo.hupucdn.com/article/2018-01-17/01c85caa08c26b779b87e36c9d200143.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_location: '杭州市萧山区市心北路',                        
            news_love: '752',
            news_comments: '1503'
        },
        {
            user_photo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=966423076,1705211373&fm=27&gp=0.jpg',
            user_name: '球探君',
            news_time: '2018-03-29',
            news_text: '你心目中最适合射门的五款足球鞋',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-26/37cedcf8a13a842e6e096f73062bc8be.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '666',
            news_comments: '1752'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/150114677910414.jpg?imageView2/0/w/68/h/68/interlace/1',            
            user_name: 'CYL66',
            news_time: '2018-03-29',
            news_text: '新年为主队喝彩！春节精彩足球赛事回顾',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-23/9e5b2751af7cfe52408fca84b91b4a95.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '53',
            news_comments: '93'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/media/201708/2916/bc689f84b9771b7611ead3a88e1c0ebd.jpg',
            user_name: '你大爷',
            news_time: '2018-03-29',
            news_text: ' 经典回顾：耐克的足球界敲门砖，传奇成就无数传奇',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-14/554d0c0290fcc987efc5ba1c43c26746.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '451',
            news_comments: '663'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/app/20170427/01c8446e-0d44-4d43-be37-cb390265914b.jpg?imageView2/0/w/68/h/68/interlace/1',
            user_name: '小小西',
            news_time: '2018-03-29',
            news_text: 'V字形步法 | 助你摆脱防守',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-11/cb19f1c08726dbb02e18db7b8d89dc6c.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_location: '杭州市萧山区市心北路',                        
            news_love: '66',
            news_comments: '782'
        },
        {
            user_photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519795840613&di=bf2fc2accf82e97e0a4e464b917d1ef8&imgtype=0&src=http%3A%2F%2Fimg003.21cnimg.com%2Fphotos%2Falbum%2F20130306%2Fm600%2FA40CF475EC521DBC6D94E8192BD9DB51.jpeg',
            user_name: '广州恒大',
            news_time: '2018-03-29',
            news_text: '经典回顾：重出江湖的猎鹰系列，只是在消费情怀？',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-13/8eb6e6e68b7c30a94bd0d6931723f7bc.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_location: '广州市天河区天河体育场',                        
            news_love: '565',
            news_comments: '712'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/app/20170130/55596733-749c-489a-b447-d3461f9363e9?imageView2/0/w/68/h/68/interlace/1',
            user_name: '型男',
            news_time: '2018-03-29',
            news_text: '足球训练小贴士——提高传球精准度',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-01/6f094de91479fd4c312ff8f580554b21.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '36',
            news_comments: '87'
        },
        {
            user_photo: 'https://shihuo.hupucdn.com/app/20170929/47db2887-f643-4a45-9702-82ca74cde372.jpg?imageView2/0/w/68/h/68/interlace/1',
            user_name: '识货',
            news_time: '2018-03-29',
            news_text: '耐克高颜值战靴——Motion Blur系列套装测评',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-01/733c4c81ca8da2adae7dc0ebbe51ae31.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_location: '南昌市青山湖区双港大道',            
            news_love: '87',
            news_comments: '962'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/app/20170809/f8351b91-9a85-4791-af9b-3522687ee550.jpg?imageView2/0/w/68/h/68/interlace/1',
            user_name: '胡66胡',
            news_time: '2018-03-29',
            news_text: '未来已经到来！走近彪马全新FUTURE系列',
            news_img: 'http://shihuo.hupucdn.com/article/2018-01-30/834226fc9758be32b8c85483d7ce98ec.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '88',
            news_comments: '448'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/146968064710526.jpg?imageView2/0/w/68/h/68/interlace/1',
            user_name: '房间',
            news_time: '2018-03-29',
            news_text: ' 阿迪达斯控制型球鞋PK ——Predator 18+ VS ACE 17+',
            news_img: 'http://shihuo.hupucdn.com/article/2018-01-27/16a5fcea5c282de6305e5d54c416cc32.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_location: '杭州市萧山区市心北路',                        
            news_love: '445',
            news_comments: '995'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/app/20170703/de9f6de3-8f56-4f35-be6f-857f27eb38a0.jpg?imageView2/0/w/68/h/68/interlace/1',
            user_name: '大卫.贝克汉姆',
            news_time: '2018-03-29',
            news_text: '英雄的武器——球星赛场特别版战靴集合',
            news_img: 'http://shihuo.hupucdn.com/article/2018-01-16/e5aafdc56af263ac29249b38ded6bf5f.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '47',
            news_comments: '242'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/app/20170707/f42c931f-d75f-48aa-9938-c7595aa80a22.jpg?imageView2/0/w/68/h/68/interlace/1',
            user_name: '英吹斯汀',
            news_time: '2018-03-29',
            news_text: '再见足球精灵！小罗退役，从此再也看不到那么带感的“牛尾巴”',
            news_img: 'http://shihuo.hupucdn.com/article/2018-01-17/01c85caa08c26b779b87e36c9d200143.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '752',
            news_comments: '1503'
        },
        {
            user_photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519795840613&di=bf2fc2accf82e97e0a4e464b917d1ef8&imgtype=0&src=http%3A%2F%2Fimg003.21cnimg.com%2Fphotos%2Falbum%2F20130306%2Fm600%2FA40CF475EC521DBC6D94E8192BD9DB51.jpeg',
            user_name: '广州恒大',
            news_time: '2018-03-29',
            news_text: '经典回顾：重出江湖的猎鹰系列，只是在消费情怀？',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-13/8eb6e6e68b7c30a94bd0d6931723f7bc.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '565',
            news_comments: '712'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/app/20170130/55596733-749c-489a-b447-d3461f9363e9?imageView2/0/w/68/h/68/interlace/1',
            user_name: '型男',
            news_time: '2018-03-29',
            news_text: '足球训练小贴士——提高传球精准度',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-01/6f094de91479fd4c312ff8f580554b21.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '36',
            news_comments: '87'
        },
        {
            user_photo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=966423076,1705211373&fm=27&gp=0.jpg',
            user_name: '球探君',
            news_time: '2018-03-28',
            news_text: '你心目中最适合射门的五款足球鞋',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-26/37cedcf8a13a842e6e096f73062bc8be.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '666',
            news_comments: '1752'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/150114677910414.jpg?imageView2/0/w/68/h/68/interlace/1',            
            user_name: 'CYL66',
            news_time: '2018-03-28',
            news_text: '新年为主队喝彩！春节精彩足球赛事回顾',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-23/9e5b2751af7cfe52408fca84b91b4a95.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_location: '深圳市龙岗区方兴科技园',                        
            news_love: '53',
            news_comments: '93'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/media/201708/2916/bc689f84b9771b7611ead3a88e1c0ebd.jpg',
            user_name: '你大爷',
            news_time: '2018-03-28',
            news_text: ' 经典回顾：耐克的足球界敲门砖，传奇成就无数传奇',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-14/554d0c0290fcc987efc5ba1c43c26746.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '451',
            news_comments: '663'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/app/20170427/01c8446e-0d44-4d43-be37-cb390265914b.jpg?imageView2/0/w/68/h/68/interlace/1',
            user_name: '小小西',
            news_time: '2018-03-27',
            news_text: 'V字形步法 | 助你摆脱防守',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-11/cb19f1c08726dbb02e18db7b8d89dc6c.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '66',
            news_comments: '782'
        },
        {
            user_photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519795840613&di=bf2fc2accf82e97e0a4e464b917d1ef8&imgtype=0&src=http%3A%2F%2Fimg003.21cnimg.com%2Fphotos%2Falbum%2F20130306%2Fm600%2FA40CF475EC521DBC6D94E8192BD9DB51.jpeg',
            user_name: '广州恒大',
            news_time: '2018-03-27',
            news_text: '经典回顾：重出江湖的猎鹰系列，只是在消费情怀？',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-13/8eb6e6e68b7c30a94bd0d6931723f7bc.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_love: '565',
            news_comments: '712'
        },
        {
            user_photo: 'http://shihuo.hupucdn.com/app/20170130/55596733-749c-489a-b447-d3461f9363e9?imageView2/0/w/68/h/68/interlace/1',
            user_name: '型男',
            news_time: '2018-03-27',
            news_text: '足球训练小贴士——提高传球精准度',
            news_img: 'http://shihuo.hupucdn.com/article/2018-02-01/6f094de91479fd4c312ff8f580554b21.jpg?imageView2/0/w/626/h/280/interlace/1',
            news_location: '南昌市青山湖区双港大道',            
            news_love: '36',
            news_comments: '87'
        },
        
    ],
    loveList : [],
}

const mutations = {
    CANCEL_love(state,res) {      
         state.loveList.splice(res.loveSub,1);
         state.newsList[res.newSub].news_love--;
    },
    ADD_love(state,res) {
        state.loveList.push(res);
        state.newsList[res].news_love++;
    },
    ADD_news(state,res) {
        state.loveList = state.loveList.map((k) => {
            return ++k;
        });
        state.newsList.unshift(res);
    }
}

export default {
    state,
    mutations
}
