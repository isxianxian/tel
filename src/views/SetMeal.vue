<template>
    <div class="h-100 bg-gray">
        <TopNav :back="true" :tit="navTit"></TopNav>
        <div class="px-7">
            <div class="label">套餐购买</div>
            <div class="bg-white bor-rad5 px-4 py-5">
                <div class="flex flex-wrap">
                    <div
                        class="meal-box bor-rad5 txt-cen bg-white flex flex-col jus-cen mr-3 my-2 pos-rel"
                        :class="{ isPay: item.isPay, isSelect: item.isSelect }"
                        v-for="item in recommends"
                        :key="item.id"
                        @click="selectMeal(recommends, item)"
                    >
                        <div class="fs-15 fs-bold txt-tit mb-2">
                            {{ item.name }}
                        </div>
                        <div class="fs-10 txt-info">{{ item.des }}</div>
                        <div
                            class="el-icon-check pos-abs fs-14 bg-white txt-primary icon"
                            style="bottom: 5px; right: 5px; border-radius: 50%"
                        ></div>
                    </div>
                </div>

                <div>
                    <div class="fs-bold mt-4 mb-2">亲情话机</div>
                    <div class="flex flex-wrap">
                        <div
                            class="meal-box bor-rad5 txt-cen bg-white flex flex-col jus-cen mr-3 my-2 fs-10 pos-rel"
                            :class="{
                                isPay: item.isPay,
                                isSelect: item.isSelect,
                            }"
                            v-for="item in tels"
                            :key="item.id"
                            @click="selectMeal(recommends, item)"
                        >
                            <div class="fs-bold txt-primary mb-2">
                                <span class="fs-15"> {{ item.money }}元</span>
                                <span class="fs-12">/</span>
                                <span>{{ item.unit }}</span>
                            </div>
                            <div class="fs-10 txt-info">{{ item.name }}</div>
                            <div
                                class="el-icon-check pos-abs fs-14 bg-white txt-primary icon"
                                style="
                                    bottom: 5px;
                                    right: 5px;
                                    border-radius: 50%;
                                "
                            ></div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="fs-bold mt-4 mb-2">及时短信</div>
                    <div class="flex flex-wrap">
                        <div
                            class="meal-box bor-rad5 txt-cen bg-white flex flex-col jus-cen mr-3 my-2 fs-10 pos-rel"
                            :class="{
                                isPay: item.isPay,
                                isSelect: item.isSelect,
                            }"
                            v-for="item in msgs"
                            :key="item.id"
                            @click="selectMeal(recommends, item)"
                        >
                            <div class="fs-bold txt-primary mb-2">
                                <span class="fs-15"> {{ item.money }}元</span>
                                <span class="fs-12">/</span>
                                <span>{{ item.unit }}</span>
                            </div>
                            <div class="fs-10 txt-info">{{ item.name }}</div>
                            <div
                                class="el-icon-check pos-abs fs-14 bg-white txt-primary icon"
                                style="
                                    bottom: 5px;
                                    right: 5px;
                                    border-radius: 50%;
                                "
                            ></div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="fs-bold mt-4 mb-2">成绩查询</div>
                    <div class="flex flex-wrap">
                        <div
                            class="meal-box bor-rad5 txt-cen bg-white flex flex-col jus-cen mr-3 my-2 fs-10 pos-rel"
                            :class="{
                                isPay: item.isPay,
                                isSelect: item.isSelect,
                            }"
                            v-for="item in querys"
                            :key="item.id"
                            @click="selectMeal(recommends, item)"
                        >
                            <div class="fs-bold txt-primary mb-2">
                                <span class="fs-15"> {{ item.money }}元</span>
                                <span class="fs-12">/</span>
                                <span>{{ item.unit }}</span>
                            </div>
                            <div class="fs-10 txt-info">{{ item.name }}</div>
                            <div
                                class="el-icon-check pos-abs fs-14 bg-white txt-primary icon"
                                style="
                                    bottom: 5px;
                                    right: 5px;
                                    border-radius: 50%;
                                "
                            ></div>
                        </div>
                    </div>
                </div>

                <div class="fs-bold mt-3" style="font-size: 18px">
                    合计：<span class="txt-red">{{ totalMoney }}</span
                    >元
                </div>
            </div>
            <div class="fs-14 txt-white bg-orange txt-cen bor-rad5 py-3 mt-4">
                立即支付
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'setMeal',
        data() {
            return {
                navTit: '套餐购买',
                totalMoney: 20,
                recommends: [
                    // 推荐套餐
                    {
                        id: 1,
                        name: '老师推荐一',
                        des: '（超值全服务套餐）',
                        money: 0,
                        isPay: false,
                        isSelect: true,
                    },
                    {
                        id: 2,
                        name: '老师推荐二',
                        des: '（超值全服务套餐）',
                        money: 0,
                        isPay: true,
                        isSelect: false,
                    },
                    {
                        id: 3,
                        name: '老师推荐三',
                        des: '（超值全服务套餐）',
                        money: 0,
                        isPay: false,
                        isSelect: false,
                    },
                ],
                tels: [
                    {
                        id: 1,
                        name: '200分钟(学期付费)',
                        money: '20',
                        unit: '月',
                        isPay: false,
                        isSelect: true,
                    },
                    {
                        id: 2,
                        name: '80分钟(学期付费)',
                        money: '8',
                        unit: '月',
                        isPay: false,
                        isSelect: false,
                    },
                    {
                        id: 3,
                        name: '40分钟(学期付费)',
                        money: '4',
                        unit: '月',
                        isPay: false,
                        isSelect: false,
                    },
                    {
                        id: 4,
                        name: '临时话费包',
                        money: '5',
                        unit: '月',
                        isPay: false,
                        isSelect: false,
                    },
                ],
                msgs: [
                    {
                        id: 1,
                        name: '无限',
                        money: '5',
                        unit: '学期',
                        isPay: false,
                        isSelect: false,
                    },
                ],
                querys: [
                    {
                        id: 1,
                        name: '无限',
                        money: '6',
                        unit: '学期',
                        isPay: false,
                        isSelect: false,
                    },
                ],
            }
        },
        methods: {
            selectMeal(obj, item) {
                let { isSelect, isPay } = item
                if (isPay) {
                    return
                }
                item.isSelect = !item.isSelect
                this.countTotal()
            },
            countTotal() {
                let { recommends, tels, msgs, querys } = this
                let selRecommends = recommends.filter((item) => {
                        return !item.isPay && item.isSelect
                    }),
                    selTels = tels.filter((item) => {
                        return !item.isPay && item.isSelect
                    }),
                    selMsgs = msgs.filter((item) => {
                        return !item.isPay && item.isSelect
                    }),
                    selQuerys = querys.filter((item) => {
                        return !item.isPay && item.isSelect
                    }),
                    selArr = [
                        ...selRecommends,
                        ...selTels,
                        ...selMsgs,
                        ...selQuerys,
                    ],
                    totalMoney = 0

                selArr.forEach((item) => {
                    totalMoney += Number(item.money)
                })

                this.totalMoney = totalMoney
            },
        },
    }
</script>

<style lang="scss" scoped>
    .meal-box {
        width: 198px;
        height: 118px;
        border: 1px solid #379cf0;
        &:nth-child(3n) {
            margin-right: 0;
        }
        .icon {
            display: none;
        }
        &.isSelect {
            background-color: #389cf0;
            div {
                color: #fff;
            }
            .icon {
                display: block;
                color: #389cf0;
            }
        }
        &.isPay {
            background-color: #f8f8f8;
            border-color: #cccccc;
            div {
                color: #9a9a9a;
            }
        }
    }
</style>