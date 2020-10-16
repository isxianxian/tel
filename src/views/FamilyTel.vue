<template>
    <div class="h-100 bg-gray over-scroll">
        <TopNav tit="亲情号" :back="true" />
        <div class="px-7">
            <div class="label">
                <span>亲情号（张一凡）</span>
            </div>
            <div class="bg-white record-box bor-rad5">
                <div
                    class="bg-primary lh-1 txt-white fs-12 px-6 py-4 flex txt-cen record-tit"
                >
                    <div class="time fs-9">角色</div>
                    <div class="duration">手机号码</div>
                    <div class="num flex-1">操作</div>
                </div>
                <div class="px-6" v-for="(item, index) in record" :key="index">
                    <div
                        class="lh-1 txt-info fs-12 py-7 flex ali-cen txt-cen"
                        :class="{ 'bor-b': index < record.length - 1 }"
                    >
                        <div class="time fs-9">{{ item.type }}</div>
                        <div class="duration">{{ item.num }}元</div>
                        <div class="num flex-1">
                            <span
                                class="px-4 py-2 border bor-rad5"
                                style="background: #f2f2f2"
                                @click="delTel"
                                >删除</span
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="bg-yellow txt-white bor-rad5 txt-cen py-4 mt-7 mb-2"
                @click="addVisible = true"
            >
                添加亲情号
            </div>
        </div>
        <el-dialog
            title="添加亲情号"
            :visible.sync="addVisible"
            width="80%"
            center
        >
            <el-form :model="addForm">
                <el-form-item label="身  份" label-width="1.5rem">
                    <el-input
                        v-model="addForm.type"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="手机号" label-width="1.5rem">
                    <el-input
                        v-model="addForm.tel"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button size="small" @click="addVisible = false"
                    >取 消</el-button
                >
                <el-button
                    size="small"
                    type="primary"
                    @click="addVisible = false"
                    >确 定</el-button
                >
            </div>
        </el-dialog>

        <el-dialog title="删除" :visible.sync="delVisible" width="80%" center>
            <div class="txt-cen">
                <span class="el-icon-delete del-icon"></span>
                <p class="fs-12 txt-info">是否删除该亲情号！</p>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button size="small" @click="delVisible = false"
                    >取 消</el-button
                >
                <el-button
                    size="small"
                    type="primary"
                    @click="delVisible = false"
                    >确 定</el-button
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
                addVisible: false,
                delVisible: false,
                addForm: {},
                record: [
                    {
                        type: '父亲',
                        num: '13912345678',
                    },
                    {
                        type: '母亲',
                        num: '13912345678',
                    },
                ],
            }
        },
        components: {},
        methods: {
            delTel() {
                this.delVisible = true
            },
        },
    }
</script>

<style lang="scss" >
    .record-box {
        .record-tit {
            border-radius: 5px 5px 0 0;
        }
        .time,
        .duration {
            width: 200px;
        }
        .el-form-item__label {
            font-size: 12px;
        }
    }
</style>
<style lang="scss" >
    .el-dialog__header .el-dialog__title {
        font-size: 16px; /*no */
        font-weight: bold;
        color: #0a0205;
    }
    .el-dialog--center .el-dialog__body {
        padding: 25px 25px 0 !important;
        .el-form-item__label {
            font-size: 12px; /*no */
        }
        .el-input__inner {
            height: 60px;
        }
        .el-form-item {
            margin-bottom: 20px;
        }
        .del-icon {
            font-size: 40px; /*no */
            color: #e76464;
            margin-bottom: 38px;
        }
    }
</style>