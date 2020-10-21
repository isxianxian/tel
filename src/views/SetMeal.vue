<template>
    <div class="h-100 bg-gray">
        <TopNav :back="true" :tit="navTit"></TopNav>
        <div class="px-7">
            <div class="label">套餐购买</div>
            <div class="bg-white bor-rad5 px-4 py-5">
                <div v-for="plan in allPlan" :key="plan.moduleId">
                    <div class="fs-bold mt-4 mb-2">{{ plan.moduleName }}</div>
                    <div class="flex flex-wrap">
                        <div
                            class="meal-box bor-rad5 txt-cen bg-white flex flex-col jus-around mr-3 my-2 fs-10 pos-rel py-2"
                            :class="{
                                isPay: item.pay,
                                isSelect: item.isSelect,
                            }"
                            v-for="item in plan.planList"
                            :key="item.id"
                            @click="selectMeal(item)"
                        >
                            <div class="fs-bold txt-primary mb-2">
                                <span class="fs-15"> {{ item.price }}元</span>
                                <span class="fs-12">/</span>
                                <span>月</span>
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
                curStudent: this.$store.state.curStudent,
                allPlan: [],
                totalMoney: 0,
            }
        },
        methods: {
            queryPlanUsed(id) {
                this.$api.allPlan(id).then((res) => {
                    let allPlan = [
                        { moduleName: '亲情话机', moduleId: 1 },
                        { moduleName: '即时短信', moduleId: 2 },
                        { moduleName: '成绩查询', moduleId: 3 },
                    ]

                    for (let item of allPlan) {
                        let id = item.moduleId
                        let planList = res.filter((item) => item.moduleId == id)
                        for (let item of planList) {
                            item.isSelect = false
                        }
                        item.planList = planList
                    }

                    this.allPlan = allPlan
                })
            },
            selectMeal(item) {
                let { isSelect, pay } = item
                if (pay) {
                    return
                }
                item.isSelect = !item.isSelect
                this.countTotal()
            },
            countTotal() {
                let { allPlan } = this,
                    selectPlan = [],
                    totalMoney = 0
                for (let plan of allPlan) {
                    selectPlan.push(
                        ...plan.planList.filter((item) => item.isSelect)
                    )
                }

                for (let item of selectPlan) {
                    totalMoney += Number(item.price)
                }

                this.totalMoney = totalMoney
            },
        },
        created() {
            let id = this.$route.query.studentId
            id ? '' : (id = this.curStudent.id)
            this.queryPlanUsed(id)
        },
    }
</script>

<style lang="scss" scoped>
    .meal-box {
        width: 198px;
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