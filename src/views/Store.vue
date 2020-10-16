<template>
    <div class="h-100 bg-gray px-7 over-scroll">
        <div class="flex p-7 bor-shadow bor-rad5 bg-white my-4">
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

        <div
            @click="showService = !showService"
            :class="{ 'show-detail': showService }"
        >
            <div
                class="flex jus-between ali-cen bg-primary txt-white p-4 tit-box"
            >
                <div>
                    <span class="el-icon-s-cooperation fs-14 mr-5"></span>
                    <span>购买服务</span>
                </div>
                <span class="el-icon-arrow-down fs-14"></span>
            </div>
            <div class="buy">
                <div class="flex pt-4 jus-between">
                    <!-- active 是已经开通 -->
                    <div class="service-box active" @click="goMeal">
                        <div class="tel bg flex jus-end ali-end pb-2 pr-3">
                            <span class="service-tit">亲情话机</span>
                        </div>
                        <div class="btn txt-cen txt-white py-2">已经开通</div>
                    </div>
                    <div class="service-box" @click="goMeal">
                        <div class="tel bg flex jus-end ali-end pb-2 pr-3">
                            <span class="service-tit">及时短信</span>
                        </div>
                        <div class="btn txt-cen txt-white bg-orange py-2">
                            立即购买
                        </div>
                    </div>
                    <div class="service-box" @click="goMeal">
                        <div class="tel bg flex jus-end ali-end pb-2 pr-3">
                            <span class="service-tit">成绩查询</span>
                        </div>
                        <div class="btn txt-cen txt-white bg-orange py-2">
                            立即购买
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            @click="showMeal = !showMeal"
            class="my-4"
            :class="{ 'show-detail': showMeal }"
        >
            <div
                class="flex jus-between ali-cen bg-primary txt-white p-4 tit-box"
            >
                <div>
                    <span class="el-icon-s-help fs-14 mr-5"></span>
                    <span>套餐用量</span>
                </div>
                <span class="el-icon-arrow-down fs-14"></span>
            </div>
            <div class="px-5 bg-white lh-1 surplus">
                <div class="pt-6 pb-4 bor-b">
                    <div class="txt-tit fs-bold txt-cen">亲情话机</div>
                    <div class="flex jus-between ali-cen my-4">
                        <div>
                            本月余额: <span class="txt-orange">30</span>分钟
                        </div>
                        <div class="fs-10">
                            （套餐：300/300 流量包：112/200）
                        </div>
                    </div>
                    <div class="txt-r txt-info" style="font-size: 10px">
                        <div class="my-2 fs-10">
                            （套餐一）2020学年亲情话机优惠套餐（20元/
                            200分钟每月/ 包学期）
                        </div>
                        <div class="my-2 fs-10">
                            亲情话机200分钟附加话费包（15元/ 200分钟/ 包学期）
                        </div>
                    </div>
                </div>
                <div class="pt-6 pb-4 bor-b">
                    <div class="txt-tit fs-bold txt-cen">即时短信</div>
                    <div class="flex jus-between ali-cen my-4">
                        <div>已开通服务</div>
                        <div class="fs-10">（套餐：不限）</div>
                    </div>
                    <div class="txt-r txt-info" style="font-size: 10px">
                        <div class="my-2 fs-10">
                            即使短信无限套餐（5元/ 无限/ 包学期）
                        </div>
                    </div>
                </div>
                <div class="pt-6 pb-4">
                    <div class="txt-tit fs-bold txt-cen fs-10">成绩查询</div>
                    <div class="flex jus-between ali-cen my-4">
                        <div>未开通服务</div>
                        <div class="fs-10">（套餐：未开通）</div>
                    </div>
                </div>
            </div>
        </div>

        <div
            @click="showRecord = !showRecord"
            class="bor-rad5"
            :class="{ 'show-detail': showRecord }"
        >
            <div
                class="flex jus-between ali-cen bg-primary txt-white p-4 tit-box"
            >
                <div>
                    <span class="el-icon-s-order fs-14 mr-5"></span>
                    <span>付款记录</span>
                </div>
                <span class="el-icon-arrow-down fs-14"></span>
            </div>
            <div class="pay">
                <div
                    class="px-3 bg-white"
                    v-for="(item, index) in record"
                    :key="index"
                >
                    <div
                        class="lh-1 txt-info fs-12 py-7 flex ali-cen txt-cen record-box"
                        :class="{ 'bor-b': index < record.length - 1 }"
                    >
                        <div class="time fs-9">{{ item.time }}</div>
                        <div class="money">{{ item.money }}</div>
                        <div class="serve flex-1 txt-r">
                            {{ item.serve }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data: function () {
            return {
                user: {
                    name: '张三',
                    grade: '高一（3）班',
                    school: '解放中学（03541）',
                    schoolNum: '203003652',
                    cardNum: '8038114444',
                },
                record: [
                    {
                        time: '2020-9-10 11:12:00',
                        money: 120,
                        serve:
                            '(套餐一)2020学年亲情话机优惠套餐包学期(套餐一)2020学年亲情话机优惠套餐包学期 ',
                    },
                    {
                        time: '2020-9-10 11:12:00',
                        money: 120,
                        serve: '(套餐一)2020学年亲情话机优惠套餐包学期 ',
                    },
                ],
                showService: false,
                showMeal: false,
                showRecord: false,
            }
        },
        components: {},
        methods: {
            goMeal() {
                this.$router.push('/setMeal')
            },
            extendDetail() {},
        },
    }
</script>

<style scoped lang="scss" >
    .record-box {
        .record-tit {
            border-radius: 5px 5px 0 0;
        }
        .time,
        .money {
            width: 200px;
        }
    }
    .tit-box {
        border-radius: 8px 8px 0 0;
    }
    .service-box {
        width: 210px;

        .tel {
            height: 100px;
            background-image: url('../assets/img/tel.png');
        }
        .mes {
            height: 100px;
            background-image: url('../assets/img/mes.png');
        }
        .query {
            height: 100px;
            background-image: url('../assets/img/query.png');
        }
        .btn {
            border-radius: 0 0 8px 8px;
            background-color: #ffae14;
        }
        .service-tit {
            color: #343434;
        }

        &.active {
            .tel {
                background-image: url('../assets/img/tel.png');
            }
            .mes {
                background-image: url('../assets/img/mes.png');
            }
            .query {
                background-image: url('../assets/img/query.png');
            }
            .btn {
                background-color: #389cf0;
            }
            .service-tit {
                color: #9a9a9a;
            }
        }
    }

    .buy,
    .surplus,
    .pay {
        height: 0;
        overflow: hidden;
        transition: height 0.2s linear 0s;
    }
    .el-icon-arrow-down {
        transition: height 0.2s linear 0s;
    }
    .show-detail {
        .buy {
            height: 180px;
        }
        .surplus {
            height: 502px;
        }
        .pay {
            height: 400px;
        }
        .el-icon-arrow-down {
            transform: rotate(180deg);
        }
    }
</style>
