var Random = Mock.Random
var index = Mock.mock('http://api.com/index', {
  // 'user|5-10': [{
  //   'name': '@cname', //中文名称
  //   'age|1-100': 100, //100以内随机整数  属性值100只用来确定类型
  //   'birthday': '@date('yyyy-MM-dd')', //日期
  //   'city': '@city(true)'//中国城市
  // }],
  'swiper|4':[
    {
      'imgPath':Random.image('800x400', '#04a1f7', '#FFF', 'png', ''),
      'id':'@id'
    }
  ],

  'section1':{
    'list|4':[{
      'imgPath':Random.image('400x400', '#b7ddf2', '#333', 'png', ''),
      'id':'@id'
    }],
    'banner':Random.image('400x100', '#ffcc33', '#FFF', 'png', 's1-banner')
  },
  'section2':{
    'list|11':[{
        'title':'@first',
        'price':[119,250,30,45,399,299,70,20,49,39,30],
        'intro': ['足球','拜仁','护膝','手套','球鞋','巴萨','队服','球袜','背包','护腿板','围脖'],
        'imgPath': [
          'https://gw.alicdn.com/imgextra/i4/17937675/TB2REqVXN9YBuNjy0FfXXXIsVXa_!!17937675.jpg_760x760q50s150.jpg_.webp',
          'https://gw.alicdn.com/imgextra/i4/17937675/TB2MpWRlf2H8KJjy1zkXXXr7pXa_!!17937675.jpg_760x760q50s150.jpg_.webp',
          'http://gw.alicdn.com/imgextra/i2/17937675/TB2MZj8hxdkpuFjy0FbXXaNnpXa_!!17937675.jpg_760x760q50s150.jpg_.webp',          
          'https://gw.alicdn.com/imgextra/i4/17937675/TB2hQTqXXOWBuNjy0FiXXXFxVXa_!!17937675.jpg_760x760q50s150.jpg_.webp',
          'https://gw.alicdn.com/imgextra/i3/17937675/TB2yteXXoOWBKNjSZKzXXXfWFXa_!!17937675.jpg_760x760q50s150.jpg_.webp',
          'http://gw.alicdn.com/imgextra/i1/17937675/TB2HqM6p4xmpuFjSZFNXXXrRXXa_!!17937675.jpg_760x760q50s150.jpg_.webp',
          'https://gw.alicdn.com/imgextra/i4/17937675/TB2.ebAngxlpuFjSszgXXcJdpXa_!!17937675.jpg_760x760q50s150.jpg_.webp',
          'http://gw.alicdn.com/imgextra/i4/17937675/TB2AWYmnRfH8KJjy1XbXXbLdXXa_!!17937675.jpg_760x760q50s150.jpg_.webp',
          'http://gw.alicdn.com/imgextra/i4/17937675/TB2N4jShCFjpuFjSszhXXaBuVXa_!!17937675.jpg_760x760q50s150.jpg_.webp',
          'http://gw.alicdn.com/imgextra/i4/17937675/TB2HDJGeBfH8KJjy1XbXXbLdXXa_!!17937675.jpg_760x760q50s150.jpg_.webp',
          'http://gw.alicdn.com/imgextra/i1/17937675/TB2OsnDi4hmpuFjSZFyXXcLdFXa_!!17937675.jpg_760x760q50s150.jpg_.webp'
        ],
        'id':'@id'
      }],
      'banner':Random.image('400x100', '#b97cc9', '#FFF', 'png', 's2-banner')
  },


  'section3':{
      'list|4':[{
        'title':['亚瑟士足球鞋','中国国家队球服','精品收纳袋','训练足球短袜'],
        'start':['8:00','8：00','10:30','12:00'],
        // 在end数组里随机取一个
        'imgPath':[
          'https://gw.alicdn.com/imgextra/i2/17937675/TB2.muiXXkoBKNjSZFkXXb4tFXa_!!17937675.jpg_760x760q50s150.jpg_.webp',
          'http://gw.alicdn.com/imgextra/i1/17937675/TB2DKNriPuhSKJjSspmXXcQDpXa_!!17937675.jpg_760x760q50s150.jpg_.webp',          
          'http://gw.alicdn.com/imgextra/i1/17937675/TB2ULfXk0fJ8KJjy0FeXXXKEXXa_!!17937675.jpg_760x760q50s150.jpg_.webp',
          'http://gw.alicdn.com/imgextra/i2/17937675/TB2o9zCnRDH8KJjSszcXXbDTFXa_!!17937675.jpg_760x760q50s150.jpg_.webp'
        ],
        'priceSpikeUrl':[
          'http://h5.m.taobao.com/awp/core/detail.htm?spm=a1z10.3-c-s.w4002-15245564052.50.7078264f2RaNHQ&id=564721196394',
          'http://h5.m.taobao.com/awp/core/detail.htm?spm=a1z10.3-c-s.w4002-15245564052.18.2b28264fuzQYXc&id=556611864169',
          'http://h5.m.taobao.com/awp/core/detail.htm?spm=a1z10.5-c-s.w4002-15245564046.73.241c3d1b4YuFtM&id=563443556342',
          'http://h5.m.taobao.com/awp/core/detail.htm?spm=a1z10.5-c-s.w4002-15245564046.52.2af53d41xWasgt&id=529050050449'
        ],
        'id':'@id',
        'price':[499,219,20,9],
        'end':['2018/04/11 8:50:00','2018/04/11 11:20:00','2018/04/11 14:10:00','2018/04/11 13:30:00'],
      }],

      'banner':Random.image('400x100', '#30f673', '#FFF', 'png', 's3-banner'),

  },


  'section4':{
    'list|34':[{
      'title':['NIKE传奇足球鞋','adidas猎鹰足球鞋','专业训练比赛口哨','俄罗斯世界杯吉祥物','弹性运动肌肉贴','NIKE正品比赛用球','NIKE新款正品刺客','足球收纳袋','训练打底裤','NIKE顶级毒蜂足球鞋','阿迪达斯正品X足球鞋','AC米兰专属球帽','彪马意产足球鞋','专业比赛训练球袜','NB专业碎丁足球鞋','广州恒大训练服','NB新款荧光绿足球鞋','NIKE传奇足球鞋','adidas猎鹰足球鞋','专业训练比赛口哨','俄罗斯世界杯吉祥物','弹性运动肌肉贴','NIKE正品比赛用球','NIKE新款正品刺客','足球收纳袋','训练打底裤','NIKE顶级毒蜂足球鞋','阿迪达斯正品X足球鞋','AC米兰专属球帽','彪马意产足球鞋','专业比赛训练球袜','NB专业碎丁足球鞋','广州恒大训练服','NB新款荧光绿足球鞋'],
      'imgPath':[
        // {
        //   'path':'https://gw.alicdn.com/imgextra/i1/61169695/TB2ZTRKihrI8KJjy0FpXXb5hVXa_!!61169695.jpg_760x760q50s150.jpg_.webp',
        //   'url':'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=560630751810',
        // },
        // {
        //   'path':'https://gw.alicdn.com/imgextra/i4/61169695/TB2LuOxihPI8KJjSspfXXcCFXXa_!!61169695.jpg_760x760q50s150.jpg_.webp',
        //   'url':'https://h5.m.taobao.com/awp/core/detail.htm?id=556607498453',
        // },
        // {
        //   'path':'https://gw.alicdn.com/imgextra/i3/61169695/TB2M5UpoVXXXXXcXpXXXXXXXXXX_!!61169695.jpg_760x760q50s150.jpg_.webp',
        //   'url':'https://h5.m.taobao.com/awp/core/detail.htm?id=531607323318',
        // },
        // {
        //   'path':'https://gw.alicdn.com/imgextra/i2/61169695/TB13bJnXrorBKNjSZFjXXc_SpXa_!!2-item_pic.png_760x760.jpg_.webp',
        //   'url':'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=563628884395',
        // },
        // {
        //   'path':'https://gw.alicdn.com/imgextra/i3/61169695/TB1VCmAX3mTBuNjy1XbXXaMrVXa_!!2-item_pic.png_760x760.jpg_.webp',
        //   'url':'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=43619587316',
        // },
        // {
        //   'path':'https://gw.alicdn.com/imgextra/i1/61169695/TB1yakrX_tYBeNjy1XdXXXXyVXa_!!2-item_pic.png_760x760.jpg_.webp',
        //   'url':'https://h5.m.taobao.com/awp/core/detail.htm?id=543067038020',
        // },
        // {
        //   'path':'https://gw.alicdn.com/imgextra/i3/61169695/TB2w3ZweGLN8KJjSZFKXXb7NVXa_!!61169695.jpg_760x760q50s150.jpg_.webp',
        //   'url':'https://h5.m.taobao.com/awp/core/detail.htm?id=558956604082',
        // },
        // {
        //   'path':'https://gw.alicdn.com/imgextra/i1/61169695/TB1IK5FX7CWBuNjy0FaXXXUlXXa_!!2-item_pic.png_760x760.jpg_.webp',
        //   'url':'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=563410966373',
        // },
        // {
        //   'path':'https://gw.alicdn.com/imgextra/i3/61169695/TB11aGFX1SSBuNjy0FlXXbBpVXa_!!2-item_pic.png_760x760.jpg_.webp',
        //   'url':'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=14297031126',
        // },
        // {
        //   'path':'https://gw.alicdn.com/imgextra/i2/61169695/TB2PVKmerglyKJjSZFuXXaE6FXa_!!61169695.jpg_760x760q50s150.jpg_.webp',
        //   'url':'https://h5.m.taobao.com/awp/core/detail.htm?id=556102220109',
        // },
        // {
        //   'path':'https://gw.alicdn.com/imgextra/i2/61169695/TB2AtvxiwoQMeJjy1XaXXcSsFXa_!!61169695.jpg_760x760q50s150.jpg_.webp',
        //   'url':'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=559665201529',
        // },
        // {
        //   'path':'https://gw.alicdn.com/imgextra/i2/61169695/TB1S.uHX7SWBuNjSszdXXbeSpXa_!!2-item_pic.png_760x760.jpg_.webp',
        //   'url':'https://h5.m.taobao.com/awp/core/detail.htm?id=556094448087',
        // },
        // {
        //   'path':'https://gw.alicdn.com/imgextra/i1/61169695/TB28s10frtlpuFjSspoXXbcDpXa_!!61169695.jpg_760x760q50s150.jpg_.webp',
        //   'url':'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=545702593722',
        // },
        // {
        //   'path':'https://gw.alicdn.com/imgextra/i4/61169695/TB1KchoXAomBKNjSZFqXXXtqVXa_!!2-item_pic.png_760x760.jpg_.webp',
        //   'url':'https://h5.m.taobao.com/awp/core/detail.htm?id=520864435596',
        // },
        // {
        //   'path':'https://gw.alicdn.com/imgextra/i2/61169695/TB2uWATqFXXXXb2XpXXXXXXXXXX_!!61169695.jpg_760x760q50s150.jpg_.webp',
        //   'url':'https://h5.m.taobao.com/awp/core/detail.htm?id=534107382258',
        // },
        // {
        //   'path':'https://gw.alicdn.com/imgextra/i1/61169695/TB1FY1GX4WYBuNjy1zkXXXGGpXa_!!2-item_pic.png_760x760.jpg_.webp',
        //   'url':'https://h5.m.taobao.com/awp/core/detail.htm?id=544860530455',
        // },
        // {
        //   'path':'https://gw.alicdn.com/imgextra/i4/61169695/TB25woSqFXXXXaAXXXXXXXXXXXX_!!61169695.jpg_760x760q50s150.jpg_.webp',
        //   'url':'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=534070070616',
        // },
        
        'https://gw.alicdn.com/imgextra/i1/61169695/TB2ZTRKihrI8KJjy0FpXXb5hVXa_!!61169695.jpg_760x760q50s150.jpg_.webp',        
        'https://gw.alicdn.com/imgextra/i4/61169695/TB2LuOxihPI8KJjSspfXXcCFXXa_!!61169695.jpg_760x760q50s150.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i3/61169695/TB2M5UpoVXXXXXcXpXXXXXXXXXX_!!61169695.jpg_760x760q50s150.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i2/61169695/TB13bJnXrorBKNjSZFjXXc_SpXa_!!2-item_pic.png_760x760.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i3/61169695/TB1VCmAX3mTBuNjy1XbXXaMrVXa_!!2-item_pic.png_760x760.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i1/61169695/TB1yakrX_tYBeNjy1XdXXXXyVXa_!!2-item_pic.png_760x760.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i3/61169695/TB2w3ZweGLN8KJjSZFKXXb7NVXa_!!61169695.jpg_760x760q50s150.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i1/61169695/TB1IK5FX7CWBuNjy0FaXXXUlXXa_!!2-item_pic.png_760x760.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i3/61169695/TB11aGFX1SSBuNjy0FlXXbBpVXa_!!2-item_pic.png_760x760.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i2/61169695/TB2PVKmerglyKJjSZFuXXaE6FXa_!!61169695.jpg_760x760q50s150.jpg_.webp',  
        'https://gw.alicdn.com/imgextra/i2/61169695/TB2AtvxiwoQMeJjy1XaXXcSsFXa_!!61169695.jpg_760x760q50s150.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i2/61169695/TB1S.uHX7SWBuNjSszdXXbeSpXa_!!2-item_pic.png_760x760.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i1/61169695/TB28s10frtlpuFjSspoXXbcDpXa_!!61169695.jpg_760x760q50s150.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i4/61169695/TB1KchoXAomBKNjSZFqXXXtqVXa_!!2-item_pic.png_760x760.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i2/61169695/TB2uWATqFXXXXb2XpXXXXXXXXXX_!!61169695.jpg_760x760q50s150.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i1/61169695/TB1FY1GX4WYBuNjy1zkXXXGGpXa_!!2-item_pic.png_760x760.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i4/61169695/TB25woSqFXXXXaAXXXXXXXXXXXX_!!61169695.jpg_760x760q50s150.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i1/61169695/TB2ZTRKihrI8KJjy0FpXXb5hVXa_!!61169695.jpg_760x760q50s150.jpg_.webp',        
        'https://gw.alicdn.com/imgextra/i4/61169695/TB2LuOxihPI8KJjSspfXXcCFXXa_!!61169695.jpg_760x760q50s150.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i3/61169695/TB2M5UpoVXXXXXcXpXXXXXXXXXX_!!61169695.jpg_760x760q50s150.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i2/61169695/TB13bJnXrorBKNjSZFjXXc_SpXa_!!2-item_pic.png_760x760.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i3/61169695/TB1VCmAX3mTBuNjy1XbXXaMrVXa_!!2-item_pic.png_760x760.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i1/61169695/TB1yakrX_tYBeNjy1XdXXXXyVXa_!!2-item_pic.png_760x760.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i3/61169695/TB2w3ZweGLN8KJjSZFKXXb7NVXa_!!61169695.jpg_760x760q50s150.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i1/61169695/TB1IK5FX7CWBuNjy0FaXXXUlXXa_!!2-item_pic.png_760x760.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i3/61169695/TB11aGFX1SSBuNjy0FlXXbBpVXa_!!2-item_pic.png_760x760.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i2/61169695/TB2PVKmerglyKJjSZFuXXaE6FXa_!!61169695.jpg_760x760q50s150.jpg_.webp',  
        'https://gw.alicdn.com/imgextra/i2/61169695/TB2AtvxiwoQMeJjy1XaXXcSsFXa_!!61169695.jpg_760x760q50s150.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i2/61169695/TB1S.uHX7SWBuNjSszdXXbeSpXa_!!2-item_pic.png_760x760.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i1/61169695/TB28s10frtlpuFjSspoXXbcDpXa_!!61169695.jpg_760x760q50s150.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i4/61169695/TB1KchoXAomBKNjSZFqXXXtqVXa_!!2-item_pic.png_760x760.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i2/61169695/TB2uWATqFXXXXb2XpXXXXXXXXXX_!!61169695.jpg_760x760q50s150.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i1/61169695/TB1FY1GX4WYBuNjy1zkXXXGGpXa_!!2-item_pic.png_760x760.jpg_.webp',
        'https://gw.alicdn.com/imgextra/i4/61169695/TB25woSqFXXXXaAXXXXXXXXXXXX_!!61169695.jpg_760x760q50s150.jpg_.webp',

      ],
      'shopUrl':[
        'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=560630751810',     
        'https://h5.m.taobao.com/awp/core/detail.htm?id=556607498453', 
        'https://h5.m.taobao.com/awp/core/detail.htm?id=531607323318',
        'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=563628884395',
        'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=43619587316',  
        'https://h5.m.taobao.com/awp/core/detail.htm?id=543067038020',
        'https://h5.m.taobao.com/awp/core/detail.htm?id=558956604082',
        'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=563410966373',
        'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=14297031126',
        'https://h5.m.taobao.com/awp/core/detail.htm?id=556102220109',
        'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=559665201529',
        'https://h5.m.taobao.com/awp/core/detail.htm?id=556094448087',
        'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=545702593722',
        'https://h5.m.taobao.com/awp/core/detail.htm?id=520864435596',
        'https://h5.m.taobao.com/awp/core/detail.htm?id=534107382258',
        'https://h5.m.taobao.com/awp/core/detail.htm?id=544860530455',
        'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=534070070616',
        'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=560630751810',     
        'https://h5.m.taobao.com/awp/core/detail.htm?id=556607498453', 
        'https://h5.m.taobao.com/awp/core/detail.htm?id=531607323318',
        'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=563628884395',
        'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=43619587316',  
        'https://h5.m.taobao.com/awp/core/detail.htm?id=543067038020',
        'https://h5.m.taobao.com/awp/core/detail.htm?id=558956604082',
        'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=563410966373',
        'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=14297031126',
        'https://h5.m.taobao.com/awp/core/detail.htm?id=556102220109',
        'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=559665201529',
        'https://h5.m.taobao.com/awp/core/detail.htm?id=556094448087',
        'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=545702593722',
        'https://h5.m.taobao.com/awp/core/detail.htm?id=520864435596',
        'https://h5.m.taobao.com/awp/core/detail.htm?id=534107382258',
        'https://h5.m.taobao.com/awp/core/detail.htm?id=544860530455',
        'https://h5.m.taobao.com/awp/core/detail.htm?spm=a2141.7631565.0.0&id=534070070616',
      ],
      'price|99-1000':100,
      'intro': '球探正品装备',
      'lookNub|10-500':10,
      'id':'@id'
    }],
    'banner':Random.image('400x100', '#ffcc33','#FFF', 'png', 's4-banner')
  }

});

var detail = Mock.mock('http://api.com/detail', {
  'view|1': [{
    'title|1': ['专柜正品 adidas 阿迪达斯 NEMEZIZ17.3AG足球鞋','专柜正品 NIKE 耐克C罗 CR7刺客AG高帮足球鞋男成人','专柜正品 PUMA 彪马ONE 17.3人工草AG男士足球鞋','正品 Adidas 阿迪达斯 18.3猎鹰AG人草足球鞋','正品 Mizuno 美津浓 男子碎钉宽脚足球鞋P1','正品 KELME 卡尔美 TF碎钉人草小学生男女儿童款足球鞋','Mizuno 美津浓4 AS无回旋4碎钉足球鞋P1GD163254','专柜正品 NB Visaro CTR AG足球鞋MSVRCAWT'
    ],
    'intro':  Random.cparagraph(2),
    'id':'@id',
    'price|99-1000':100,
    'chose|3':[{
      'col|+1':['大学红','闪电黄','熔岩黑'],
      'size|+1':['38','39','40','41','42','43','44','45']
    }]
  }],

  'swiper|2':[{
    'imgSrc':Random.image('400x400', '#ffcc33','#FFF', 'png', ''),
    'id':'@id'
  }],

  'contentImgSrc|8':[{
    'imgSrc':Random.image('600x600', '#5a9e6e','#FFF', 'png', '')
  }]
});
 
var category = Mock.mock('http://api.com/category', {
    // 'aside|11':[{
    //   'title':['足球鞋','团队球服','国家队','俱乐部','足球生活','训练装备','装备包','足球袜','足球','护具','儿童装备'],
    //   'list|33':[{
    //     'title':'@first',
    //     'imgPath':Random.image('2000x2000','#5169b4','#FFF','png',''),

    //   }]
    // }]

    'aside':[
      {
        'partenTitle':'足球鞋',
        'allUrl':'https://shop.m.taobao.com/shop/shop_index.htm?user_id=61169695&item_id=560630751810&spm=a1z3i.7c.0.ishopheader#list?q=%E8%B6%B3%E7%90%83%E9%9E%8B',
        'sonTitle':['NIKE','Adidas','Puma','mizuno','新百伦','茵宝','安踏','亚瑟士','李宁','锐克','刺客','传奇','毒蜂','鬼牌','BOMBAX','猎鹰','ACE','X逆天绝杀','Nemeziz','MESSI专属','FUTURE','ONE','EVOPOWER','EVOSPEED','EVOTOUCH','KING','Truora','morelia','无回旋','basara','rebula','MONARCIDA','RYUOU','NEO']
      },
      {
        'partenTitle':'国家队',
        'allUrl':'https://shop34482783.m.taobao.com/?refer=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fspm%3Da230r.1.14.22.1d155500KRb50w%26id%3D560630751810%26ns%3D1%26abbucket%3D17&spm=2013.1.0.0.2c841062lrzT7R#list?catId=915114205&catTxt=%E5%9B%BD%E5%AE%B6%E9%98%9F%E8%A3%85%E5%A4%87',
        'sonTitle':['中国','德国','西班牙','法国','英格兰','意大利','葡萄牙','巴西','阿根廷','比利时','日本','韩国','瑞士','荷兰','克罗地亚','塞尔维亚','澳大利亚','波兰','土耳其','冰岛']
      },
      {
        'partenTitle':'俱乐部',
        'allUrl':'https://shop34482783.m.taobao.com/?refer=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fspm%3Da230r.1.14.22.1d155500KRb50w%26id%3D560630751810%26ns%3D1%26abbucket%3D17&spm=2013.1.0.0.2c841062lrzT7R#list?catId=346571626&catTxt=%E6%96%B0%E8%B5%9B%E5%AD%A3%E4%BF%B1%E4%B9%90%E9%83%A8%E8%A3%85%E5%A4%87',
        'sonTitle':['恒大','巴塞罗那','皇家马德里','曼联','阿森纳','切尔西','曼城','拜仁','多特蒙德','马竞','尤文图斯','AC米兰','国际米兰','罗马','巴黎','申花','国安']
      },
      {
        'partenTitle':'世界杯',
        'allUrl':'https://shop.m.taobao.com/shop/shop_index.htm?user_id=61169695&item_id=560630751810&spm=a1z3i.7c.0.ishopheader#list?catId=1358024358&catTxt=2018%E4%BF%84%E7%BD%97%E6%96%AF%E4%B8%96%E7%95%8C%E6%9D%AF%E8%A3%85%E5%A4%87',
        'sonTitle':['吉祥物','比赛用球','宣传海报','钥匙扣','世界杯抱枕','贴纸','围巾']
      },
      {
        'partenTitle':'团队球服',
        'allUrl':'https://shop.m.taobao.com/shop/shop_index.htm?user_id=61169695&item_id=560630751810&spm=a1z3i.7c.0.ishopheader#list?catId=439007956&catTxt=%E5%9B%A2%E9%98%9F%E7%90%83%E6%9C%8D',
        'sonTitle':['团队球服','出场服','球袜','护具']
      },
      {
        'partenTitle':'足球生活',
        'allUrl':'https://shop.m.taobao.com/shop/shop_index.htm?user_id=61169695&item_id=560630751810&spm=a1z3i.7c.0.ishopheader#list?catId=1120061349&catTxt=%E8%B6%B3%E7%90%83%E7%94%9F%E6%B4%BB%E7%B3%BB%E5%88%97',
        'sonTitle':['棉服','羽绒服','上衣','裤装','休闲鞋','蜂控鞋带','吸汗毛巾','雨伞','T恤','发带','水杯','围巾','帽子']
      },
      {
        'partenTitle':'训练装备',
        'allUrl':'https://shop.m.taobao.com/shop/shop_index.htm?user_id=61169695&item_id=560630751810&spm=a1z3i.7c.0.ishopheader#list?catId=1280866757&catTxt=%E7%94%B7%E5%AD%90%E8%AE%AD%E7%BB%83%E8%A3%85%E5%A4%87',
        'sonTitle':['足球裤','训练衫','紧身衣','收腿裤','护腿板','背心','套头衫','围脖','训练帽']
      },
      {
        'partenTitle':'装备包',
        'allUrl':'https://shop34482783.m.taobao.com/?refer=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fspm%3Da230r.1.14.22.1d155500KRb50w%26id%3D560630751810%26ns%3D1%26abbucket%3D17&spm=2013.1.0.0.2c841062lrzT7R#list?catId=987598869&catTxt=%E8%A3%85%E5%A4%87%E5%8C%85',
        'sonTitle':['单肩包','双肩包','手提','收纳袋','球网']
      },
      {
        'partenTitle':'足球袜',
        'allUrl':'https://shop34482783.m.taobao.com/?refer=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fspm%3Da230r.1.14.22.1d155500KRb50w%26id%3D560630751810%26ns%3D1%26abbucket%3D17&spm=2013.1.0.0.2c841062lrzT7R#list?catId=987598867&catTxt=%E8%B6%B3%E7%90%83%E8%A2%9C',
        'sonTitle':['短袜','中筒袜','长筒袜','防滑袜','中长袜','训练袜']
      },
      {
        'partenTitle':'足球',
        'allUrl':'https://shop34482783.m.taobao.com/?refer=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fspm%3Da230r.1.14.22.1d155500KRb50w%26id%3D560630751810%26ns%3D1%26abbucket%3D17&spm=2013.1.0.0.2c841062lrzT7R#list?catId=896741819&catTxt=%E8%B6%B3%E7%90%83',
        'sonTitle':['NIKE','Adidas','世达','Puma','火车头','5号足球','4号足球','纪念足球','儿童足球']
      },
      {
        'partenTitle':'儿童装备',        
        'allUrl':'https://shop34482783.m.taobao.com/?refer=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fspm%3Da230r.1.14.22.1d155500KRb50w%26id%3D560630751810%26ns%3D1%26abbucket%3D17&spm=2013.1.0.0.2c841062lrzT7R#list?catId=1035137507&catTxt=%E5%84%BF%E7%AB%A5%E8%A3%85%E5%A4%87',
        'sonTitle':['球迷服','儿童足鞋','儿童足球','足球套装']
      },
      {
        'partenTitle':'其他',        
        'allUrl':'https://shop.m.taobao.com/shop/shop_index.htm?user_id=61169695&item_id=560630751810&spm=a1z3i.7c.0.ishopheader#list?catId=987598868&catTxt=%E6%8A%A4%E5%85%B7%2F%E5%99%A8%E6%9D%90%2F%E9%85%8D%E4%BB%B6',
        'sonTitle':['穿戴护具','黏贴保护','训练器材','手套','鞋带','后脚跟贴','装备维护','急救药品','奖杯奖牌']
      }
      // 'title':['足球鞋','团队球服','国家队','俱乐部','足球生活','训练装备','装备包','足球袜','足球','护具','儿童装备'],
      // 'list|33':[{
      //   'title':'@first',
      //   'imgPath':Random.image('2000x2000','#5169b4','#FFF','png',''),

      // }]
    ]
});
 
export {index,detail,category}
