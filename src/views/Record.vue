<template>
    <div class="h-100 bg-gray over-scroll">
        <TopNav tit="通话记录" :back="true" />
        <div class="px-7">
            <div class="label">
                <span>通话记录（{{ curStudent.name }}）</span>
            </div>
            <div class="bg-white record-box bor-rad5">
                <div
                    class="bg-primary lh-1 txt-white fs-12 px-6 py-4 flex txt-cen record-tit"
                >
                    <div class="time fs-9">开始时间</div>
                    <div class="duration">通话时长</div>
                    <div class="num flex-1">被叫号码</div>
                </div>
                <div class="px-6" v-for="(item, index) in record" :key="index">
                    <div
                        class="lh-1 txt-info fs-12 py-4 flex ali-cen txt-cen"
                        :class="{ 'bor-b': index < record.length - 1 }"
                    >
                        <div class="time fs-9">{{ item.time }}</div>
                        <div class="duration">{{ item.duration }}元</div>
                        <div class="num flex-1">
                            {{ item.num }}
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
                curStudent: this.$store.state.curStudent,
                record: [
                    {
                        time: '2020-9-10 11:12:00',
                        duration: '45s',
                        num: '13912345678',
                    },
                    {
                        time: '2020-9-10 11:12:00',
                        duration: '45s',
                        num: '13912345678',
                    },
                    {
                        time: '2020-9-10 11:12:00',
                        duration: '45s',
                        num: '13912345678',
                    },
                ],
            }
        },
        components: {},
    }
</script>

<style scoped  lang="scss" >
    .record-box {
        .record-tit {
            border-radius: 5px 5px 0 0;
        }
        .time,
        .duration {
            width: 200px;
        }
    }
</style>