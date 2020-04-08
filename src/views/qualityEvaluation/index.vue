<!--<template>-->
    <!--<div class="quality_container">-->
        <!--<section class="quality_wrap">-->
            <!--<div class="quality_banner">-->
                <!--<img src="../../assets/images/pic_lanshanhu_banner_bg.png" alt="">-->
                <!--<div class="quality_banner_font">-->
                    <!--&lt;!&ndash;<h1>蓝珊瑚｜让数据质量问题清晰可见</h1>&ndash;&gt;-->
                    <!--&lt;!&ndash;<p>不会编码，零业务基础的你也可操作</p>&ndash;&gt;-->
                    <!--<div class="button" @click="onSubmit">免费使用</div>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="quality_goodsList">-->
                <!--<div class="quality_switch ">-->
                    <!--<div class="quality_switch_text">-->
                        <!--<span-->
                                <!--id="spans"-->
                                <!--v-for="(item, index) in nameList"-->
                                <!--:key="index"-->
                                <!--:class="zindex === index?'isActive':''"-->
                                <!--@click="isActive(index, item)"-->
                        <!--&gt;{{item}}</span>-->
                    <!--</div>-->
                    <!--<div class="quality_switch_bar" :style="{transform: `translateX(${zindex*oWidth}px)`}"></div>-->
                <!--</div>-->
                <!--<div class="quality_content">-->
                    <!--<div class="quality_step" v-show="zindex === 0">-->
                        <!--<ul class="quality_step_list">-->
                            <!--<li v-for="(item, index) in stepList" :key="index">-->
                                <!--<span>{{index+1}}.{{item}}</span>-->
                                <!--<img-->
                                        <!--v-if="index !== 4"-->
                                        <!--src="../../assets/images/icon_arrow.png"-->
                                        <!--alt=""-->
                                <!--&gt;-->
                            <!--</li>-->
                        <!--</ul>-->
                        <!--<ol class="quality_img">-->
                            <!--<li v-for="(item, index) in stepImgList" :key="index">-->
                                <!--<img :src="item.src" alt="">-->
                            <!--</li>-->
                        <!--</ol>-->
                    <!--</div>-->
                    <!--<div class="quality_process" v-show="zindex === 1">-->
                        <!--<div class="quality_line">-->
                            <!--<img src="../../assets/images/pic_shiyongliucheng.png" alt="">-->
                        <!--</div>-->
                        <!--&lt;!&ndash;<ol class="quality_line_name">&ndash;&gt;-->
                        <!--&lt;!&ndash;<li>&ndash;&gt;-->
                        <!--&lt;!&ndash;<img src="../../assets/images/icon_process_data.png" alt="">&ndash;&gt;-->
                        <!--&lt;!&ndash;</li>&ndash;&gt;-->
                        <!--&lt;!&ndash;<li>&ndash;&gt;-->
                        <!--&lt;!&ndash;<img src="../../assets/images/icon_process_data.png" alt="">&ndash;&gt;-->
                        <!--&lt;!&ndash;</li>&ndash;&gt;-->
                        <!--&lt;!&ndash;<li>&ndash;&gt;-->
                        <!--&lt;!&ndash;<img src="../../assets/images/icon_process_data.png" alt="">&ndash;&gt;-->
                        <!--&lt;!&ndash;</li>&ndash;&gt;-->
                        <!--&lt;!&ndash;</ol>&ndash;&gt;-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="quality_scene">-->
                    <!--<h1>使用场景</h1>-->
                    <!--<ul class="quality_scene_list">-->
                        <!--<li>-->
                            <!--<div class="quality_scene_nav">-->
                                <!--<span>接入的数据质量如何？</span>-->
                            <!--</div>-->
                            <!--<div class="quality_userinfo">-->
                                <!--<img src="../../assets/images/pic_guanliyuan.png" alt="">-->
                                <!--<span>作为数据管理员，我要对接入的数据进行质量评价，以便于向领导汇报接入数据的质量情况。</span>-->
                            <!--</div>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<div class="quality_scene_nav2">-->
                                <!--<span>如何保证数据报表分析结果可信？</span>-->
                            <!--</div>-->
                            <!--<div class="quality_userinfo">-->
                                <!--<img src="../../assets/images/pic_fenxishi.png" alt="">-->
                                <!--<span>作为数据分析师，我要对被分析的数据进行质量评价，以便于找出影响分析结果的问题数据。</span>-->
                            <!--</div>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="quality_product">-->
                <!--<div class="quality_product_title">-->
                    <!--<h1>产品优势</h1>-->
                    <!--<p>国内权威的数据质量评价工具</p>-->
                <!--</div>-->
                <!--<div class="quality_product_content">-->
                    <!--<ul>-->
                        <!--<li v-for="(item, index) in productList" :key="index">-->
                            <!--<div class="quality_product_header">-->
                                <!--<img :src="item.src" alt="">-->
                                <!--<span>{{item.title}}</span>-->
                            <!--</div>-->
                            <!--<div class="quality_product_text">{{item.describe}}</div>-->
                        <!--</li>-->
                    <!--</ul>-->
                    <!--<div class="quality_edition">版本特性</div>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="quality_edition_container vip-container">-->
                <!--<div class="con-wrap contrast fl ">-->
                    <!--<p class="tr-1">分类</p>-->
                    <!--<p class="tr-2">可用模块</p>-->
                    <!--<p class="tr-3">专家规则库</p>-->
                    <!--<p class="tr-4">数据源</p>-->
                    <!--<p class="tr-5">价格</p>-->

                <!--</div>-->
                <!--<div class="con-wrap contrast free fl">-->
                    <!--<p class="tr-1">产品特性</p>-->
                    <!--<p class="tr-2">-->
                        <!--<a>数据质量评价</a>-->
                        <!--<a>查看评价历史</a>-->
                        <!--<a>预约评价任务</a>-->
                        <!--<a>自定义规则</a>-->
                    <!--</p>-->
                    <!--<p class="tr-3">-->
                        <!--<a>100条通用规则</a>-->
                        <!--<a>200条通用+50条定制化规则</a>-->
                    <!--</p>-->
                    <!--<p class="tr-4">-->
                        <!--<a>Excel数据源</a>-->
                        <!--<a>CSV数据源</a>-->
                        <!--<a>Mysql数据源</a>-->
                        <!--<a>Oracle数据源</a>-->
                    <!--</p>-->
                    <!--<p class="tr-5"></p>-->
                <!--</div>-->
                <!--<div class="con-wrap gx fl on">-->
                    <!--<p class="tr-1">-->
                            <!--<span>-->
                                <!--<a>免费版</a>-->
                                <!--<a>使用基础功能内容</a>-->
                            <!--</span>-->
                    <!--</p>-->
                    <!--<p class="tr-2">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                        <!--<img src="../../assets/images/check_chazi.png" alt="">-->
                    <!--</p>-->
                    <!--<p class="tr-3">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                        <!--<img src="../../assets/images/check_chazi.png" alt="">-->
                    <!--</p>-->
                    <!--<p class="tr-4">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                    <!--</p>-->
                    <!--&lt;!&ndash;<p class="tr-5"></p>&ndash;&gt;-->
                    <!--&lt;!&ndash;<p class="tr-5"><i class="vip-no"></i>&nbsp;&ndash;&gt;-->
                    <!--&lt;!&ndash;<span class="vip-warning"></span></p>&ndash;&gt;-->
                    <!--<p class="tr-12">-->
                        <!--<a href="javascript:;" class="btn" @click="onSubmit">免费使用</a>-->
                    <!--</p>-->
                <!--</div>-->
                <!--<div class="con-wrap yc fl">-->
                    <!--<p class="tr-1">-->
                            <!--<span>-->
                                <!--<a>专业版</a>-->
                                <!--<a>定制专家库规则</a>-->
                            <!--</span>-->
                    <!--</p>-->
                    <!--<p class="tr-2">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                    <!--</p>-->
                    <!--<p class="tr-3">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                    <!--</p>-->
                    <!--<p class="tr-4">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                        <!--<img src="../../assets/images/check_gary.png" alt="">-->
                    <!--</p>-->
                    <!--&lt;!&ndash;<p class="tr-5"></p>&ndash;&gt;-->
                    <!--&lt;!&ndash;<p class="tr-5"><i class="vip-no"></i>&nbsp;&ndash;&gt;-->
                    <!--&lt;!&ndash;<span class="vip-warning"></span></p>&ndash;&gt;-->

                    <!--<p class="tr-12">-->
                        <!--<a href="javascript:;" class="color">敬请期待</a>-->
                    <!--</p>-->
                <!--</div>-->

                <!--&lt;!&ndash; <ul>-->
                    <!--<li>-->
                        <!--<div class="table_header">分类</div>-->
                        <!--<div class="tr1">可用模块</div>-->
                        <!--<div class="tr2">专家库规则</div>-->
                        <!--<div class="tr3">数据源</div>-->
                        <!--<div class="tr4">价格</div>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<div class="table_header">产品特性</div>-->
                        <!--<div class="tr1 td2">-->
                            <!--<div class="yes2">数据质量评价</div>-->
                            <!--<div class="yes2">查看评价历史</div>-->
                            <!--<div class="yes2">预约评价任务</div>-->
                            <!--<div class="yes2">自定义规则</div>-->
                        <!--</div>-->
                        <!--<div class="tr2 td2">-->
                            <!--<div class="yes2">100条通用规则</div>-->
                            <!--<div class="yes2">200条通用+50条定制化规则</div>-->
                        <!--</div>-->
                        <!--<div class="tr3 td2">-->
                            <!--<div class="yes2">Excel数据源</div>-->
                            <!--<div class="yes2">CSV数据源</div>-->
                            <!--<div class="yes2">Mysql数据源</div>-->
                            <!--<div class="yes2">Oracle数据源</div>-->
                        <!--</div>-->
                        <!--<div class="tr4"></div>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<div class="table_header td">-->
                            <!--<h1>免费版</h1>-->
                            <!--<p>使用基础功能内容</p>-->
                        <!--</div>-->
                        <!--<div class="tr1 td1">-->
                            <!--<div class="yes" v-for="(item, index) in 3" :key="index">-->
                                <!--<img src="../../assets/images/check_gary.png" alt="">-->
                            <!--</div>-->
                            <!--<div class="yes">-->
                                <!--<img src="../../assets/images/check_chazi.png" alt="">-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="tr2 td1">-->
                            <!--<div class="yes">-->
                                <!--<img src="../../assets/images/check_gary.png" alt="">-->
                            <!--</div>-->
                            <!--<div class="yes">-->
                                <!--<img src="../../assets/images/check_chazi.png" alt="">-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="tr3 td1">-->
                            <!--<div class="yes" v-for="(item, index) in 4" :key="index">-->
                                <!--<img src="../../assets/images/check_gary.png" alt="">-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="tr4 td3">-->
                            <!--<button type="button" class="btn">免费使用</button>-->
                        <!--</div>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<div class="table_header tc">-->
                            <!--<h1>专业版</h1>-->
                            <!--<p>定制专家库规则</p>-->
                        <!--</div>-->
                        <!--<div class="tr1 td1">-->
                            <!--<div class="yes" v-for="(item, index) in 4" :key="index">-->
                                <!--<img src="../../assets/images/check_gary.png" alt="">-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="tr2 td1">-->
                            <!--<div class="yes" v-for="(item, index) in 2" :key="index">-->
                                <!--<img src="../../assets/images/check_gary.png" alt="">-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="tr3 td1">-->
                            <!--<div class="yes" v-for="(item, index) in 4" :key="index">-->
                                <!--<img src="../../assets/images/check_gary.png" alt="">-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="tr4 td3">-->
                            <!--<button type="button" class="color">敬请期待</button>-->
                        <!--</div>-->
                    <!--</li>-->
                <!--</ul> &ndash;&gt;-->
            <!--</div>-->
        <!--</section>-->
    <!--</div>-->
<!--</template>-->
<!--<style lang="scss" scoped>-->

    <!--.tr-12 {-->
        <!--display: flex;-->
        <!--align-items: center;-->
        <!--justify-content: center;-->
    <!--}-->

    <!--.btn, .color {-->
        <!--width: 140px;-->
        <!--height: 40px;-->
        <!--font-size: 18px;-->
        <!--text-align: center;-->
        <!--line-height: 40px;-->
        <!--border-radius: 4px;-->
        <!--cursor: pointer;-->
        <!--text-decoration: none;-->
    <!--}-->

    <!--.btn {-->
        <!--border: 1px solid rgba(247, 186, 0, 1);-->
        <!--color: rgba(247, 186, 0, 1);-->
        <!--background: none;-->
    <!--}-->

    <!--.color {-->
        <!--background: rgba(244, 244, 244, 1);-->
        <!--color: #999999;-->
    <!--}-->
<!--</style>-->
<!--<script>-->
    <!--import './index.scss'-->
    <!--import './style.scss'-->
    <!--import {getToken} from "../../utils/auth";-->
    <!--import {developmentUrl} from "../../utils/config";-->


    <!--export default {-->
        <!--name: "index",-->
        <!--data() {-->
            <!--return {-->
                <!--zindex: 0,-->
                <!--oWidth: "190",-->
                <!--nameList: ["功能页面", "使用流程"],-->
                <!--stepList: ["确认数据", "匹配规则", "检查规则", "展示结果", "查看报告"],-->
                <!--stepImgList: [-->
                    <!--{src: require('../../assets/images/pic_teps_01.png')},-->
                    <!--{src: require('../../assets/images/pic_teps_02.png')},-->
                    <!--{src: require('../../assets/images/pic_teps_03.png')},-->
                    <!--{src: require('../../assets/images/pic_teps_04.png')},-->
                    <!--{src: require('../../assets/images/pic_teps_05.png')}-->
                <!--],-->
                <!--productList: [-->
                    <!--{-->
                        <!--src: require('../../assets/images/icon_guizeku.png'),-->
                        <!--title: "权威规则库",-->
                        <!--describe: "依据国家标准、行业标准、地方标准和政府发文等抽取质量评价规则。"-->

                    <!--},-->
                    <!--{-->
                        <!--src: require('../../assets/images/icon_pingjiamoxing.png'),-->
                        <!--title: "智能评价模型",-->
                        <!--describe: "将规则按照规则属性和应用范围双维度管理，提升匹配精准度；利用网络分析法形成动态权重分配评分模型。"-->
                    <!--},-->
                    <!--{-->
                        <!--src: require('../../assets/images/icon_pingjiatiyan.png'),-->
                        <!--title: "零思考评价体验",-->
                        <!--describe: "不需要清晰业务逻辑，不需要编写质量检查脚本，让每个人都可以像专家一样发现和定位数据质量问题；"-->
                    <!--}-->
                <!--],-->
            <!--}-->
        <!--},-->
        <!--mounted() {-->

            <!--// setTimeout(() => {-->
            <!--//     window.top.postMessage(-->
            <!--//         {-->
            <!--//             name: "childRequestState",-->
            <!--//             data: {-->
            <!--//                 uetoken: getToken() && getToken() !== "" && getToken() !== "undefined" ? getToken() : ""-->
            <!--//             },-->
            <!--//             replay: true-->
            <!--//         }, "http://192.168.112.14:9001"-->
            <!--//     );-->
            <!--// }, 2000)-->
        <!--},-->
        <!--methods: {-->
            <!--isActive(index, item) {-->
                <!--this.zindex = index-->
                <!--if (item == "功能页面") {-->
                    <!--setTimeout(() => {-->
                        <!--let scrollHeight = document.body.scrollHeight-->
                        <!--console.log(scrollHeight);-->
                        <!--window.top.postMessage(-->
                            <!--{-->
                                <!--name: "setIframeHeight",-->
                                <!--data: scrollHeight,-->
                                <!--replay: false-->
                            <!--}, developmentUrl-->
                        <!--);-->
                    <!--}, 400)-->
                <!--} else {-->
                    <!--setTimeout(() => {-->
                        <!--let scrollHeight = document.body.scrollHeight-->
                        <!--console.log(scrollHeight);-->
                        <!--window.top.postMessage(-->
                            <!--{-->
                                <!--name: "setIframeHeight",-->
                                <!--data: scrollHeight,-->
                                <!--replay: false-->
                            <!--}, developmentUrl-->
                        <!--);-->
                    <!--}, 400)-->
                <!--}-->
            <!--},-->

            <!--// 免费使用 是否登录-->
            <!--onSubmit() {-->
                <!--console.log(getToken());-->
                <!--if (getToken() && getToken() !== "" && getToken !== "undefined") {-->
                    <!--window.top.postMessage(-->
                        <!--{-->
                            <!--name: "childTryOut",-->
                            <!--data: {-->
                                <!--uetoken: getToken(),-->
                                <!--// channeId: "'103", //先不传-->
                                <!--// chinnelName: "数据质量评价", //先不传-->
                                <!--versionName: "质量评价 免费版", // '质量评估 专业版'-->
                                <!--versionCode: "10401" // 10402-->
                            <!--},-->
                            <!--replay: true-->
                        <!--}, developmentUrl-->
                    <!--);-->

                <!--} else {-->

                    <!--window.top.postMessage(-->
                        <!--{-->
                            <!--name: "childRequestLogin",-->
                            <!--data: "",-->
                            <!--replay: true-->
                        <!--}, developmentUrl-->
                    <!--);-->
                <!--}-->
            <!--}-->
        <!--},-->

        <!--watch: {-->
            <!--fullHeight(val) {-->
                <!--console.log(val);-->
                <!--if (!this.timer) {-->
                    <!--this.fullHeight = val-->
                    <!--this.timer = true-->
                    <!--let that = this-->
                    <!--setTimeout(function () {-->
                        <!--that.timer = false-->
                    <!--}, 400)-->
                <!--}-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->


