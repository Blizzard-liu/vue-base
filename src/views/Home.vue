<template>
    <div class="reaconmend" ref="reaconmend">
      <lottie class="lottie2" :url="url1"></lottie>
      <lottie class="lottie" :url="url2"></lottie>
    <div class="reaconmend-content">
      <div>
        <div class="reaconmend-list">
          <ul>
            <li  v-for="item in discList" :key="item.dissid" class="item">
              <div class="icon">
                <img :src="item.imgurl" alt width="60px" height="60px" />
                <i class="light-flash"></i>
              </div>
              <div class="text">
                <i class="list-bg"></i>
                <h2 class="name" v-html="item.creator.name"></h2>
                <div class="desc" v-html="item.dissname"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: "home",
  components: {
   lottie: () => import("@components/lottie"),
  },
  data() {
    let that = this;
    return {
      discList: [],
      url1:'/packages/lf20_3vbOcw.json',
      url2:"/packages/lf20_wWb05D.json"
    };
  },
  computed: {
  
  },
  created() {
   this.discList = [
  {
    dissid: "7382629476",
    createtime: "2020-03-02",
    commit_time: "2020-03-02",
    dissname: "精选 | 好听到单曲循环的热歌",
    imgurl:
      "http://p.qpic.cn/music_cover/Z89aLA93LOSOicz0QOnMboqgLaiaFohjweglHh6JSoL8hrjOfFOC6DXw/600?n=1",
    introduction: "",
    listennum: 174079751,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 1968987427,
      encrypt_uin: "oKEsNeEF7ivA7z**",
      name: "故事未完待续",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "2975873670",
    createtime: "2018-07-17",
    commit_time: "2018-07-17",
    dissname: "快手抖音最火热门曲♡",
    imgurl:
      "http://p.qpic.cn/music_cover/ym794MIAO6WRXZQVRxophKE2roB90yVgnGBIfx3GRjqESmUro54mJQ/600?n=1",
    introduction: "",
    listennum: 97261760,
    score: 0,
    version: 0,
    creator: {
      type: 0,
      qq: 455334017,
      encrypt_uin: "7e4koioPoe6l",
      name: "Y̶A̶N̶G̶M̶E̶I̶R̶U̶I̶.",
      isVip: 0,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "4149582982",
    createtime: "2018-06-07",
    commit_time: "2018-06-07",
    dissname: "全民K歌翻唱热歌榜盘点",
    imgurl:
      "http://p.qpic.cn/music_cover/Z7haT1p6eeic63oTvdlNb7xoHMYjBDlQict0ccSicdRpgLTicqoLHqtf9g/600?n=1",
    introduction: "",
    listennum: 187588032,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 3028642107,
      encrypt_uin: "oinANeCPow6z7z**",
      name: "豆沙",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "1790504159",
    createtime: "2017-12-14",
    commit_time: "2017-12-14",
    dissname: "青春记忆 | 90后校园岁月的流行歌曲",
    imgurl:
      "http://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vtgScu1rJ2j96RMbHicskCxy7jTxB0VynZQ/600?n=1",
    introduction: "",
    listennum: 199518444,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 1367363703,
      encrypt_uin: "oKos7iosoiSzoz**",
      name: "秋水浮萍任飘渺",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "7459587400",
    createtime: "2020-03-11",
    commit_time: "2020-03-11",
    dissname: "经典老歌 | 免费下载重温好旋律",
    imgurl:
      "http://p.qpic.cn/music_cover/ZfWLEKXs0aUDM9Rl8E4k7CzIGeF28O602XtuKmZtcD5S2NzffacicOA/600?n=1",
    introduction: "",
    listennum: 12125145,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 1934427156,
      encrypt_uin: "oKEi7evA7i6k7c**",
      name: "华语流行之王",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "857253164",
    createtime: "2017-02-24",
    commit_time: "2017-02-24",
    dissname: "200首华语金曲，你一定在KTV点过这些歌",
    imgurl:
      "http://p.qpic.cn/music_cover/Biax4WTSMic4N0bgPWDwUCs0U1ZpaC3FJmVKYbA4FmORq7ZeLYRLGiclQ/600?n=1",
    introduction: "",
    listennum: 420673064,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 1245280330,
      encrypt_uin: "oK-P7K-Foeoion**",
      name: "花痞",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "3781120966",
    createtime: "2019-10-28",
    commit_time: "2019-10-28",
    dissname: "华语KTV热歌（持续更新）",
    imgurl:
      "http://p.qpic.cn/music_cover/amD8XDvFG8ClIJ5Hib0U0jcGYrfBL4jvndkKKbkNLs2hC4Mk7khQpjw/600?n=1",
    introduction: "",
    listennum: 94589596,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 1214673117,
      encrypt_uin: "oK-57eCloi657z**",
      name: "小攀哟",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "6800944944",
    createtime: "2019-03-13",
    commit_time: "2019-03-13",
    dissname: "劲爆嗨曲中文dj舞曲",
    imgurl:
      "http://p.qpic.cn/music_cover/wEXxTcWOqGq4o7ia3XxBicoMuYibWRy3uicndAYINqptTGtaNHNriarXNvg/600?n=1",
    introduction: "",
    listennum: 15769815,
    score: 0,
    version: 0,
    creator: {
      type: 0,
      qq: 408080999,
      encrypt_uin: "7enFoeczNKEq",
      name: "晓",
      isVip: 0,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "3517857745",
    createtime: "2017-05-16",
    commit_time: "2017-05-16",
    dissname: "经典老歌，昨日重现丨感觉走过好多年",
    imgurl:
      "http://p.qpic.cn/music_cover/tLkiayu4IiaIZo1t56qczThtusqicia3mnlX51S3D2j2FTRBKMwFuZOBuQ/600?n=1",
    introduction: "",
    listennum: 117478709,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 431971379,
      encrypt_uin: "7eo5NKS5oiSq",
      name: "你描述的那段爱",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "3805603854",
    createtime: "2018-04-01",
    commit_time: "2018-04-01",
    dissname: "周杰伦：这世界需要我的歌",
    imgurl:
      "http://p.qpic.cn/music_cover/gaSSCRswoq7NlpHA8vK1PhEKjEedic69tMicrTRXCxamBeHhVmDujLmQ/600?n=1",
    introduction: "",
    listennum: 176805815,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 3239619075,
      encrypt_uin: "oi-iNKC5NKnl7v**",
      name: "歌单狂魔",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "6946005790",
    createtime: "2019-04-21",
    commit_time: "2019-04-21",
    dissname: "王者荣耀 | carry全场首选BGM",
    imgurl:
      "http://p.qpic.cn/music_cover/D7K7C3zWofLYecwwfx0y1gdyFDevsZK7YkJfUtibotdztdVkrePha7w/600?n=1",
    introduction: "",
    listennum: 72176117,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 1757456989,
      encrypt_uin: "oKSk7ivk7wEFNv**",
      name: "做我的猫",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "2066215911",
    createtime: "2017-07-01",
    commit_time: "2017-07-01",
    dissname: "三百首经典，评论999+的寂寞情歌集",
    imgurl:
      "http://p.qpic.cn/music_cover/icjlOHNpzv2QB5HYN57LPxLBQ94KxrhJQUz4kYCXlJ1GAOgFvbrPkibg/600?n=1",
    introduction: "",
    listennum: 123462363,
    score: 0,
    version: 0,
    creator: {
      type: 0,
      qq: 2861103164,
      encrypt_uin: "owcsoK6zoi6s7n**",
      name: "Music  先生",
      isVip: 0,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "3566830427",
    createtime: "2017-06-18",
    commit_time: "2017-06-18",
    dissname: "经典国语300首：等待也是种乐观态度",
    imgurl:
      "http://p.qpic.cn/music_cover/Cz8Z9ECDQia3gE2YticLiaJ2220KGGic4rg7zRzDUjDUpBqqLPa4q1Dh4w/600?n=1",
    introduction: "",
    listennum: 366908402,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 931905769,
      encrypt_uin: "NKo5NKnk7iCq",
      name: "陈哲",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "862061407",
    createtime: "2019-05-08",
    commit_time: "2019-05-08",
    dissname: "劲爆中文DJ版歌曲",
    imgurl:
      "http://p.qpic.cn/music_cover/F3miaVzIACX1E06KkiabXwn2gfia2c0LVdYvPic3OdZ6jHnLib1nST8EH7w/600?n=1",
    introduction: "",
    listennum: 16591324,
    score: 0,
    version: 0,
    creator: {
      type: 0,
      qq: 550829340,
      encrypt_uin: "7K4zNe-qoivz",
      name: "就这一生你别难过",
      isVip: 0,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "7013795380",
    createtime: "2019-06-18",
    commit_time: "2019-06-18",
    dissname: "十年之后，还有这些歌让人感动",
    imgurl:
      "http://p.qpic.cn/music_cover/j50Ihtp2h2UwaRgJuNjmRzeDcEa5a0fbGDZtFywKd0MJnJh8O7O19g/600?n=1",
    introduction: "",
    listennum: 16372403,
    score: 0,
    version: 0,
    creator: {
      type: 3,
      qq: 987036132,
      encrypt_uin: "NKcloeosoKoA",
      name: "亦晨",
      isVip: 3,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "7062703125",
    createtime: "2019-07-08",
    commit_time: "2019-07-08",
    dissname: "伤感情歌 · 爱是一场高烧",
    imgurl:
      "http://p.qpic.cn/music_cover/nvRBiaJHaPBvG00iczEYfbu18fibYH4JAvOS28GibL5gaGEVibJjicZjUN9A/600?n=1",
    introduction: "",
    listennum: 28044340,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 467638189,
      encrypt_uin: "7eCl7woFoKcq",
      name: "蜜糖男孩",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "7222826654",
    createtime: "2019-09-23",
    commit_time: "2019-09-23",
    dissname: "热歌向：你一定都爱听这些歌",
    imgurl:
      "http://p.qpic.cn/music_cover/uXtIBAxaiaVfmdYhOibK1DgibolSN5dO9ictuZhmiag5T0dpT6W1ED0DCTA/600?n=1",
    introduction: "",
    listennum: 37381960,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 482219519,
      encrypt_uin: "7ecAow6q7K6q",
      name: "K先生的猫",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "921829546",
    createtime: "2017-10-09",
    commit_time: "2017-10-09",
    dissname: "听不腻的经典老歌",
    imgurl:
      "http://p.qpic.cn/music_cover/Yc1Sf95aCmt2gJx53cFYOhH3dHx9XTq9oqQ9Keo08kg89BQf8HRicxQ/600?n=1",
    introduction: "",
    listennum: 13112201,
    score: 0,
    version: 0,
    creator: {
      type: 0,
      qq: 1277769611,
      encrypt_uin: "oK-l7iSsNKC5ov**",
      name: "💍唯爱『娟』",
      isVip: 0,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "7407371797",
    createtime: "2020-02-17",
    commit_time: "2020-02-17",
    dissname: "人气爆棚！直播时爱听的热歌",
    imgurl:
      "http://p.qpic.cn/music_cover/3MLTH2k3HibTypyQfrdDcnOVF9ibhEUDeOicqWgQ36w5I9LTgnicXIuZ2w/600?n=1",
    introduction: "",
    listennum: 3027909,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 1083284863,
      encrypt_uin: "oKnFoi-F7ecsoz**",
      name: "北鹤",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "1152182852",
    createtime: "2017-03-18",
    commit_time: "2017-03-18",
    dissname: "毒性电音 前奏就让人沦陷的极致良曲",
    imgurl:
      "http://p.qpic.cn/music_cover/Ay2w92PeiaO57pZWMwecv6XBQBkTYHGfp3AyHQ7R0wL5SuiaMLN29H8w/600?n=1",
    introduction: "",
    listennum: 44528790,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 1009772031,
      encrypt_uin: "oKnzNKSlowniov**",
      name: "L岺",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "2055984773",
    createtime: "2017-10-31",
    commit_time: "2017-10-31",
    dissname: "古韵妙音300首：让心穿越到古风世界",
    imgurl:
      "http://p.qpic.cn/music_cover/G8MzQ9Uiahag9FRxThCHF4QUaBqvVN3wbB35yFVN7fxxicknSeE9jB0w/600?n=1",
    introduction: "",
    listennum: 52450647,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 695636314,
      encrypt_uin: "7wEk7wosoi6P",
      name: "随心",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "3822846160",
    createtime: "2018-04-10",
    commit_time: "2018-04-10",
    dissname: "「忘原唱系列」惊艳耳际，一秒倾心",
    imgurl:
      "http://p.qpic.cn/music_cover/amD8XDvFG8ClIJ5Hib0U0jflDmGAkNV1vqDWf3S07wto59RNZhuKdjg/600?n=1",
    introduction: "",
    listennum: 30531192,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 1214673117,
      encrypt_uin: "oK-57eCloi657z**",
      name: "小攀哟",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "1743733369",
    createtime: "2017-11-07",
    commit_time: "2017-11-07",
    dissname: "曾经红遍大街小巷的歌，已成为青春的回忆！",
    imgurl:
      "http://p.qpic.cn/music_cover/PiajxSqBRaELMiaFiadPqlaJxVbFMiaickbRwBxxtFbOENp0uyQXnnGIgGA/600?n=1",
    introduction: "",
    listennum: 91069609,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 5225213,
      encrypt_uin: "7K-A7K-5oz**",
      name: "bad boy",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "5375317625",
    createtime: "2018-10-27",
    commit_time: "2018-10-27",
    dissname: "「硬核战歌」无音乐不游戏",
    imgurl:
      "http://p.qpic.cn/music_cover/teNC3ZiaQKialg3foOIzDfLEf5GrWUPEgs12Gzib32p8ibluD96kzDsBZw/600?n=1",
    introduction: "",
    listennum: 17616402,
    score: 0,
    version: 0,
    creator: {
      type: 0,
      qq: 1127914446,
      encrypt_uin: "oK6A7iE57evP7c**",
      name: "初少丶",
      isVip: 0,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "3274706383",
    createtime: "2017-09-16",
    commit_time: "2017-09-16",
    dissname: "伤感华语 ：连歌词都能写到一个人的心里",
    imgurl:
      "http://p.qpic.cn/music_cover/r9Js18hQauaHlf3udYvKsh7RI9Kd7fpiaJ4INX7F8U67PqkGp7G75kQ/600?n=1",
    introduction: "",
    listennum: 106006404,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 1400010678,
      encrypt_uin: "oKvzoen5oeClNn**",
      name: "玫瑰王",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "3716447185",
    createtime: "2018-02-08",
    commit_time: "2018-02-08",
    dissname: "我好想学习啊！熬夜必备百首英文",
    imgurl:
      "http://p.qpic.cn/music_cover/A68o1S3cCg2seVsQVvbZBgE1AeqQsPZmcxlBCFozbKMOZicibVjyN95A/600?n=1",
    introduction: "",
    listennum: 56066130,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 3083067593,
      encrypt_uin: "oinFoins7i4qoz**",
      name: "冬天吃了秋天",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "1344581550",
    createtime: "2017-06-13",
    commit_time: "2017-06-13",
    dissname: "【华语伤情】最好的邂逅，最难的再见",
    imgurl:
      "http://p.qpic.cn/music_cover/2GPicHmV3GLUtQ2iaofHcBu8m0uje6cb9EdhV8icw7HuQNpHyQgmhLayQ/600?n=1",
    introduction: "",
    listennum: 32524541,
    score: 0,
    version: 0,
    creator: {
      type: 0,
      qq: 2091140332,
      encrypt_uin: "ownqoK6Poeoioc**",
      name: "⁠十",
      isVip: 0,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "7492919923",
    createtime: "2020-03-30",
    commit_time: "2020-03-30",
    dissname: "值得单曲循环的优质冷门歌 Vol.1",
    imgurl:
      "http://p.qpic.cn/music_cover/l2TjT4xsWkl0J4c5Q2Dvcz6BibZMkXD1K30JUvDUoialvGnhwUF42MzQ/600?n=1",
    introduction: "",
    listennum: 650982,
    score: 0,
    version: 0,
    creator: {
      type: 2,
      qq: 3104417409,
      encrypt_uin: "oi6z7ev57ivzNv**",
      name: "Q音音乐人",
      isVip: 2,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "3230056671",
    createtime: "2016-12-19",
    commit_time: "2016-12-19",
    dissname: "周杰伦最全歌曲正序集",
    imgurl:
      "http://y.gtimg.cn/music/photo/album_500/18/500_albumpic_8218_0.jpg?n=1",
    introduction: "",
    listennum: 7642522,
    score: 0,
    version: 0,
    creator: {
      type: 0,
      qq: 1304915708,
      encrypt_uin: "oKoz7eE57KSzNn**",
      name: "消失的追随者",
      isVip: 0,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "1160561614",
    createtime: "2017-07-07",
    commit_time: "2017-07-07",
    dissname: "中文dj歌曲",
    imgurl:
      "http://p.qpic.cn/music_cover/BPqcMRgqLbDhdUjO1ncHAsjSIMUfgsLEMckdOdUVD8A5rGUpWga4rg/600?n=1",
    introduction: "",
    listennum: 6971896,
    score: 0,
    version: 0,
    creator: {
      type: 0,
      qq: 3243519651,
      encrypt_uin: "oi-Poi45NKCkov**",
      name: "晨宇gg",
      isVip: 0,
      avatarUrl: "",
      followflag: 0,
    },
  },
];;
  },
  mounted() {
    
  },
  methods: {
  
  }
};
</script>
<style lang="scss" scoped>
.reaconmend {
  padding:20px;
  position: relative;
  .lottie {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 300px;
    height: 300px;

  }
  .lottie2 {
    position: fixed;
    top: 40px;
    right: 40px;
    width: 300px;
    height: 300px;
  }
  .reaconmend-content {
    height: 100%;
    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
  }
  .reaconmend-list {
    .list-title {
      height: 40px;
      line-height: 40 px;
      text-align: center;
      font-size: var(--font-size-medium);
      color: var(--text-1);
    }
    .item {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      padding: 0 20px 20px 20px;
      .icon {
        position: relative;
        width: 60px;
        margin-right: 20px;
        overflow: hidden;
        transition: all .3s ease;
        &:hover {
          transform: translateY(-6px);
    -webkit-transform: translateY(-6px);
    -moz-transform: translateY(-6px);
    box-shadow: 0 12px 20px -12px rgba(0,36,100,.5);
    -webkit-box-shadow:  0 12px 20px -12px rgba(0,36,100,.5);
    -moz-box-shadow:  0 12px 20px -12px rgba(0,36,100,.5);
    .light-flash {
          transition: all .3s ease;
    left: 100%;
    }
        }
      }
      .text {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        background: transparent;
        // flex: 1;
        width: 300px;
        line-height: 20px;
        overflow: hidden;
        color: var(--font-size-medium);
        &:hover {
          .list-bg{
            width:100%;
          }
        }
      }
      .list-bg{
    width: 0;
    height: 100%;
    display: block;
    position: absolute;
    background: #f4f4f4;
    top: 0;
    right: 0;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
      }
      .name {
        z-index: 1;
        margin-bottom: 10px;
        color: var(--text);
      }
      .desc {
        z-index: 1;
        color: var(--text-1);
      }
    }
  }
  .loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
