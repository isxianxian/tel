<template>
    <div class="h-100 bg-gray">
        <TopNav tit="成绩详情" :back="true" />
        <div class="px-7">
            <div class="my-7 fs-bold">2019-2020学期***其中考试（张一凡）</div>
            <div class="bg-white record-box bor-rad5">
                <div
                    class="bg-primary lh-1 txt-white fs-12 px-7 py-5 flex txt-cen record-tit"
                >
                    <div class="type fs-9">总分</div>
                    <div class="count">626/750</div>
                    <div class="serve flex-1 txt-r">
                        <span class="px-5 py-2 bg-white txt-tit bor-rad5"
                            >历史趋势</span
                        >
                    </div>
                </div>
                <div class="px-6" v-for="(item, index) in record" :key="index">
                    <div
                        class="lh-1 txt-info fs-12 py-7 flex ali-cen txt-cen"
                        :class="{ 'bor-b': index < record.length - 1 }"
                    >
                        <div class="type fs-9">{{ item.type }}</div>
                        <div class="count">{{ item.count }}</div>
                        <div class="serve flex-1 txt-r">
                            <span
                                class="px-5 py-2 bg-white txt-primary border bor-rad5"
                                style="border-color: #389cf0"
                                @click="goHistory(item)"
                                >历史趋势</span
                            >
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
                record: [
                    { type: '语文', count: 120 },
                    { type: '语文', count: 120 },
                    { type: '语文', count: 120 },
                ],
            }
        },
        components: {},
        methods: {
            goHistory(item) {
                this.$router.push('/history')
            },
        },
    }
</script>

<style lang="scss" >
    .record-box {
        .record-tit {
            border-radius: 5px 5px 0 0;
        }
        .type {
            min-width: 150px;
        }
        .count {
            min-width: 200px;
        }
    }
</style>
