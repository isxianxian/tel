<template>
    <div class="h-100 bg-gray">
        <div class="px-7 py-5">
            <div class="bg-white p-7 flex">
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
            <div class="flex ali-cem jus-between my-6">
                <div
                    class="bg-green txt-white py-6 bor-rad5 flex ali-cen jus-cen"
                    style="width: 48%"
                    @click="goPage(0)"
                >
                    <img
                        src="../assets/img/record-bg.png"
                        style="width: 0.7rem"
                    />
                    <span class="ml-7">通话记录</span>
                </div>
                <div
                    class="bg-yellow txt-white py-6 bor-rad5 flex ali-cen jus-cen"
                    style="width: 48%"
                    @click="goPage(1)"
                >
                    <img src="../assets/img/tel-bg.png" style="width: 0.7rem" />
                    <span class="ml-7">亲情号</span>
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
            }
        },
        components: {},
        methods: {
            goPage(index) {
                if (index == 0) {
                    this.$router.push('/record')
                } else {
                    this.$router.push('/familyTel')
                }
            },
        },
    }
</script>

<style lang="scss" >
</style>
