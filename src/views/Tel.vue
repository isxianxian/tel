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

                    <span class="ml-7"> 通话记录</span>
                </div>
                <div
                    class="bg-yellow txt-white py-6 bor-rad5 flex ali-cen jus-cen"
                    style="width: 48%"
                    @click="goPage(1)"
                >
                    <img src="../assets/img/tel-bg.png" style="width: 0.7rem" />
                    <div class="p-3 pr-5" @click.stop="mesVisible = true">
                        <span class="el-icon-question txt-white fs-14"></span>
                    </div>
                    <span class="lh-1">亲情号</span>
                </div>
            </div>
        </div>

        <el-dialog title="信息" :visible.sync="mesVisible" width="80%" center>
            <div class="fs-12 txt-cen">学生刷卡即可看见亲人号码！</div>

            <div slot="footer" class="dialog-footer">
                <el-button
                    size="small"
                    type="primary"
                    @click="mesVisible = false"
                    >关 闭</el-button
                >
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data: function () {
            return {
                mesVisible: false,
            }
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
