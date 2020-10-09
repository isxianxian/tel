<template>
    <div class="home h-100">
        <div class="pos-rel">
            <div class="pos-abs home-bg">
                <img src="../assets/img/home-bg.png" width="100%" />
            </div>
            <div class="content px-7 pos-rel">
                <div class="p-7 bor-shadow bor-rad5 bg-white">
                    <div class="txt-cen" v-if="loginStatus == 0">
                        <p class="txt-tit fs-bold lh-2" style="font-size: 16px">
                            登录
                        </p>
                        <p class="txt-info lh-2" style="font-size: 12px">
                            对不起，您还未登录
                        </p>
                    </div>
                    <div class="flex ali-cen" v-else-if="loginStatus == 1">
                        <div class="txt-cen">
                            <img
                                src="../assets/img/avator.png"
                                style="width: 1.35rem; height: 1.35rem"
                            />
                        </div>
                        <div class="fs-12 txt-info pl-7">
                            <p class="fs-16 fs-bold txt-tit">{{ user.name }}</p>
                            <p>对不起，您还未绑定学生卡！</p>
                        </div>
                    </div>
                    <div class="flex" v-else>
                        <div class="flex flex-col jus-between txt-cen">
                            <img
                                src="../assets/img/avator.png"
                                style="width: 1.35rem; height: 1.35rem"
                            />
                            <p class="fs-16 fs-bold txt-tit lh-1.5">
                                {{ user.name }}
                            </p>
                        </div>
                        <div class="fs-12 txt-info pl-7">
                            <p class="lh-2">班级：{{ user.grade }}</p>
                            <p class="lh-2">学校：{{ user.school }}</p>
                            <p class="lh-2">学号：{{ user.schoolNum }}</p>
                            <p class="lh-2">一卡通号：{{ user.cardNum }}</p>
                        </div>
                    </div>
                </div>
                <div
                    class="txt-cen txt-info my-5 add bor-rad5"
                    @click="bindStudent"
                >
                    <span class="icon el-icon-plus mr-5 fs-bold"></span>
                    <span> 绑定学生卡</span>
                </div>
            </div>
        </div>
        <div class="bill-box" @click="$router.push('/pay')">
            <img src="../assets/img/bill-bg.png" width="100%" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data: function () {
            return {
                loginStatus: 2, // 登陆状态：0，未登录，1，登陆未绑定，2，已绑定
                user: {
                    name: '张三',
                    grade: '高一（3）班',
                    school: '解放中学（03541）',
                    schoolNum: '203003652',
                    cardNum: '8038114444',
                },
            }
        },
        components: {},
        methods: {
            bindStudent() {
                this.$router.push('/bind')
            },
        },
    }
</script>

<style lang="scss" >
    .home {
        .home-bg {
            width: 100%;
            height: 150px;
        }
        .content {
            padding-top: 220px;
        }
        .add {
            height: 98px;
            line-height: 98px;
            border: 2px dotted #cccccc;
        }
        .bill-box {
            width: 120px;
            height: 120px;
            position: fixed;
            z-index: 2;
            bottom: 140px;
            right: 60px;
        }
    }
</style>
