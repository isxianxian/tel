<template>
    <div class="h-100 bg-gray px-7 over-scroll">
        <div class="my-4">
            <Person></Person>
        </div>

        <div :class="{ 'show-detail': showService }">
            <div
                @click="showService = !showService"
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
                    <div class="service-box" @click="goMeal">
                        <div class="tel bg flex jus-end ali-end pb-2 pr-3">
                            <span class="service-tit">亲情话机</span>
                        </div>
                        <div class="btn txt-cen txt-white py-2">立即购买</div>
                    </div>
                    <div
                        class="service-box"
                        :class="{ active: mesStatus }"
                        @click="mesStatus ? '' : goMeal()"
                    >
                        <div class="mes bg flex jus-end ali-end pb-2 pr-3">
                            <span class="service-tit">即时短信</span>
                        </div>
                        <div class="btn txt-cen txt-white bg-orange py-2">
                            {{ !mesStatus ? '立即购买' : '已经开通' }}
                        </div>
                    </div>
                    <div
                        class="service-box"
                        :class="{ active: scrollStatus }"
                        @click="scrollStatus ? '' : goMeal()"
                    >
                        <div class="query bg flex jus-end ali-end pb-2 pr-3">
                            <span class="service-tit">成绩查询</span>
                        </div>
                        <div class="btn txt-cen txt-white bg-orange py-2">
                            {{ !scrollStatus ? '立即购买' : '已经开通' }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-4" :class="{ 'show-detail': showMeal }">
            <div
                @click="showMeal = !showMeal"
                class="flex jus-between ali-cen bg-primary txt-white p-4 tit-box"
            >
                <div>
                    <span class="el-icon-s-help fs-14 mr-5"></span>
                    <span>套餐用量</span>
                </div>
                <span class="el-icon-arrow-down fs-14"></span>
            </div>
            <div
                class="px-5 bg-white lh-1 meal"
                :style="{ height: showMeal ? mealH : 0 }"
            >
                <div ref="meal">
                    <div
                        v-for="(item, index) in usedPlan"
                        :key="item.id"
                        class="pt-6 pb-4"
                        :class="{ 'bor-b': !(index == usedPlan.length - 1) }"
                    >
                        <div class="txt-tit fs-bold txt-cen">
                            {{ item.moduleName }}
                        </div>
                        <div class="flex jus-between ali-cen my-4">
                            <div>
                                本月余额:
                                <span class="txt-orange">
                                    {{
                                        item.total +
                                        item.extraTotal -
                                        item.used -
                                        item.extraUsed
                                    }} </span
                                >分钟
                            </div>

                            <div class="fs-10">
                                （套餐：{{ item.used }}/{{
                                    item.total
                                }}
                                流量包：{{ item.extraUsed }}/{{
                                    item.extraTotal
                                }}）
                            </div>
                        </div>
                        <div class="txt-r txt-info" style="font-size: 10px">
                            <div
                                class="my-2 fs-10"
                                v-for="plan in item.planList"
                                :key="plan.id"
                            >
                                {{ plan.name }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bor-rad5" :class="{ 'show-detail': showRecord }">
            <div
                @click="showRecord = !showRecord"
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
    let timeId = null
    export default {
        name: 'Home',
        data: function () {
            return {
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
                mealH: 0,
                showRecord: false,
                usedPlan: [],
                mesStatus: 0,
                scrollStatus: 0,
                curStudent: this.$store.state.curStudent,
            }
        },
        components: {},
        methods: {
            goMeal() {
                this.$router.push('/setMeal')
            },
            extendDetail() {},
            queryPlanUsed() {
                let { id } = this.curStudent
                this.$api.planUsed(id).then((res) => {
                    this.usedPlan = res
                    if (res.length > 0) {
                        this.mesStatus = res.find(
                            (item) => item.moduleName == '即时短信'
                        ).status
                        this.scrollStatus = res.find(
                            (item) => item.moduleName == '成绩查询'
                        ).status

                        timeId = setTimeout(() => {
                            this.mealH = this.$refs.meal.clientHeight + 'px'
                        }, 1)
                    }
                })
            },
        },
        created() {
            this.queryPlanUsed()
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
                background-image: url('../assets/img/mes1.png');
            }
            .query {
                background-image: url('../assets/img/query1.png');
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
    .meal,
    .pay {
        height: 0;
        overflow: hidden;
        transition: height 0.3s linear 0s;
    }
    .buy {
        transition: height 0.2s linear 0s;
    }

    .el-icon-arrow-down {
        transition: height 0.2s linear 0s;
    }
    .show-detail {
        .buy {
            height: 180px;
        }
        .pay {
            height: 400px;
        }
        .el-icon-arrow-down {
            transform: rotate(180deg);
        }
    }
</style>
