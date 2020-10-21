<template>
    <div class="h-100 bg-gray">
        <div class="px-7 py-5">
            <div>
                <Person></Person>
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
            return {}
        },
        components: {},
        computed: {
            student() {
                return this.$store.state.curStudent
            },
        },
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

<style lang="scss" scoped >
</style>
