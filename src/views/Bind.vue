<template>
    <div class="h-100">
        <TopNav tit="绑定学生" :back="true" />
        <div class="bg-gray px-7">
            <div class="label">
                <span>学生查找</span>
            </div>
            <div class="student-box bg-white pt-4 pb-4 bor-rad5">
                <el-form ref="form" :model="searchForm" label-width="1.5rem">
                    <el-form-item label="学校">
                        <el-select
                            v-model="searchForm.school"
                            placeholder="请选择学校"
                        >
                            <el-option
                                class="student"
                                v-for="(item, i) in schools"
                                :key="i"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="姓名">
                        <el-input
                            v-model="searchForm.name"
                            placeholder="请输入姓名"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <span
                            class="py-4 bg-primary bor-rad5 txt-white"
                            style="padding-left: 0.7rem; padding-right: 0.7rem"
                            >搜索</span
                        >
                    </el-form-item>
                </el-form>
            </div>
            <div
                v-for="(item, index) in users"
                :key="index"
                class="flex ali-cen jus-between bg-white p-7 pos-rel my-6 bor-rad5"
            >
                <div class="flex flex-col jus-between txt-cen">
                    <img
                        src="../assets/img/avator.png"
                        style="width: 1.35rem; height: 1.35rem"
                    />
                    <p class="fs-16 fs-bold txt-tit lh-1.5 mt-3">
                        {{ item.name }}
                    </p>
                </div>
                <div class="fs-12 txt-info">
                    <p class="lh-2">班级：{{ item.grade }}</p>
                    <p class="lh-2">学校：{{ item.school }}</p>
                    <p class="lh-2">学号：{{ item.schoolNum }}</p>
                    <p class="lh-2">一卡通号：{{ item.cardNum }}</p>
                </div>
                <div>
                    <span
                        class="px-4 py-3 bg-primary bor-rad5 txt-white"
                        @click="bindStudent(item)"
                        >绑定学生</span
                    >
                </div>
            </div>
        </div>
        <el-dialog
            class="student-mes"
            title="绑定学生"
            :visible.sync="bindVisible"
            width="80%"
            center
        >
            <div class="fs-12">
                <div class="flex ali-cen mb-6 txt-r">
                    <span class="mr-4">学号</span>
                    <el-input
                        class="flex-1"
                        v-model="studentForm.studentNum"
                        autocomplete="off"
                    ></el-input>
                </div>
                <div class="flex ali-cen mb-6 txt-r">
                    <div
                        class="mr-4"
                        style="width: 2.2rem"
                        @click="mesVisible = true"
                    >
                        <span>电子学生证</span>
                        <span
                            class="el-icon-question txt-primary fs-14 mx-1"
                            style="vertical-align: middle"
                        ></span>
                    </div>
                    <el-input
                        class="flex-1"
                        v-model="studentForm.cdNum"
                        autocomplete="off"
                    ></el-input>
                </div>
            </div>

            <div slot="footer" class="dialog-footer">
                <el-button size="small" @click="bindVisible = false"
                    >取 消</el-button
                >
                <el-button
                    size="small"
                    type="primary"
                    @click="bindVisible = false"
                    >确 定</el-button
                >
            </div>
        </el-dialog>
        <el-dialog title="信息" :visible.sync="mesVisible" width="80%" center>
            <div class="fs-12 txt-cen">电子学生证号见电话卡的编号</div>

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
                loginStatus: 2, // 登陆状态：0，未登录，1，登陆未绑定，2，已绑定
                users: [
                    {
                        name: '张三',
                        grade: '高一（3）班',
                        school: '解放中学（03541）',
                        schoolNum: '203003652',
                        cardNum: '*******',
                    },
                    {
                        name: '李四',
                        grade: '高一（3）班',
                        school: '解放中学（03541）',
                        schoolNum: '203003652',
                        cardNum: '******',
                    },
                ],
                studentForm: {},
                schools: [
                    { label: '学校1', value: '1' },
                    { label: '学校2', value: '2' },
                    { label: '学校3', value: '3' },
                ],
                bindVisible: false,
                mesVisible: false,
                searchForm: {},
            }
        },
        methods: {
            bindStudent(item) {
                this.bindVisible = true
            },
        },
        components: {},
    }
</script>

<style lang="scss" >
    .student-box {
        .el-form-item {
            margin-bottom: 20px;
        }
        .el-input__inner {
            width: 520px;
            height: 68px;
            line-height: 68px;
        }
    }
</style>
