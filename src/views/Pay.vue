<template>
    <div class="h-100">
        <TopNav tit="帮人代付" :back="true" />
        <div class="bg-gray px-7">
            <div>
                <div class="label">
                    <span>学生查找</span>
                </div>
                <div class="student-box bg-white pt-4 pb-4 bor-rad5">
                    <el-form
                        ref="form"
                        :model="searchForm"
                        label-width="1.5rem"
                    >
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
                        <el-form-item label="学号">
                            <el-input
                                v-model="searchForm.studentNum"
                                placeholder="请输入学号"
                            ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <span
                                class="py-4 bg-primary bor-rad5 txt-white"
                                style="
                                    padding-left: 0.7rem;
                                    padding-right: 0.7rem;
                                "
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
                            class="px-4 py-3 bg-orange bor-rad5 txt-white"
                            @click="pay(item)"
                            >购买服务</span
                        >
                    </div>
                </div>
            </div>

            <div class="my-8">
                <div class="label">
                    <span>代付记录</span>
                </div>
                <div class="bg-white pay-box bor-rad5 mb-2 txt-cen">
                    <div
                        class="bg-primary lh-1 txt-white fs-12 px-6 py-4 flex record-tit"
                    >
                        <div class="time">付款时间</div>
                        <div class="time">姓名</div>
                        <div class="time">支付金额</div>
                        <div class="serve flex-1">购买服务</div>
                    </div>
                    <div
                        class="px-6"
                        v-for="(item, index) in payList"
                        :key="index"
                        @click="goDetail(item)"
                    >
                        <div
                            class="lh-1 txt-info py-4 flex ali-cen"
                            :class="{ 'bor-b': index < payList.length - 1 }"
                        >
                            <div class="time">{{ item.time }}</div>
                            <div class="time">{{ item.name }}</div>
                            <div class="time">{{ item.money }}</div>
                            <div class="serve flex-1">{{ item.serve }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <el-dialog
            title="填写学生信息"
            :visible.sync="studentVisible"
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
                <el-button size="small" @click="studentVisible = false"
                    >取 消</el-button
                >
                <el-button
                    size="small"
                    type="primary"
                    @click="choiceVisible = true"
                    >去购买</el-button
                >
            </div>
        </el-dialog>

        <el-dialog title="购买" :visible.sync="choiceVisible" width="80%">
            <div class="fs-12 pl-6">
                <p class="txt-info">服务（张一凡）</p>
                <div
                    class="flex ali-cen my-5 txt-white"
                    v-for="(item, index) in telTypes"
                    :key="index"
                >
                    <div
                        class="border bor-rad5 mr-4"
                        style="width: 0.5rem; height: 0.5rem"
                        @click="chooseService(index)"
                    >
                        <span
                            v-show="item.pay"
                            class="el-icon-check txt-tit"
                            style="font-size: 0.6rem"
                        ></span>
                    </div>
                    <div
                        class="bg-green py-3 bor-rad5 px-4"
                        :class="{ 'bg-orange': item.all }"
                        style="width: 3rem"
                    >
                        <span>{{ item.name }}</span
                        >( <span>{{ item.money }}</span
                        >元/ <span>{{ item.unit }}</span
                        >)
                    </div>
                </div>
                <div class="my-6 txt-tit fs-bold" style="font-size: 15px">
                    合计：{{ totalPay }}元
                </div>
            </div>

            <div slot="footer" class="dialog-footer">
                <el-button size="small" type="primary" @click="goPay"
                    >去支付</el-button
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

        <el-dialog
            title="帮人代付"
            :visible.sync="payVisible"
            width="80%"
            center
        >
            <div class="txt-cen">
                <span
                    class="el-icon-circle-check"
                    style="font-size: 40px; color: green"
                ></span>
                <p class="fs-12 txt-info mt-4">购买成功！</p>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button
                    size="small"
                    type="primary"
                    @click="
                        payVisible = false
                        choiceVisible = false
                        studentVisible = false
                    "
                    >确定</el-button
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
                studentForm: {
                    school: '',
                    name: '',
                    studentNum: '',
                },
                schools: [
                    { label: '学校1', value: '1' },
                    { label: '学校2', value: '2' },
                    { label: '学校3', value: '3' },
                ],
                studentVisible: false,
                searchForm: {},
                payVisible: false,
                mesVisible: false,
                choiceVisible: false,
                telTypes: [
                    // 服务类型
                    { name: '亲情通话', money: '150', unit: '年', pay: false },
                    { name: '消息通讯', money: '50', unit: '年', pay: false },
                    { name: '成绩查询', money: '30', unit: '年', pay: false },
                    {
                        name: '购买全部',
                        money: '230',
                        unit: '年',
                        pay: false,
                        all: true,
                    },
                ],
                payList: [
                    // 代付记录
                    {
                        time: '2020-9-10 11:12:00',
                        name: '张一凡',
                        money: '120元',
                        serve: '亲情话机',
                    },
                    {
                        time: '2020-9-10 11:12:00',
                        name: '张一凡',
                        money: '120元',
                        serve: '亲情话机',
                    },
                    {
                        time: '2020-9-10 11:12:00',
                        name: '张一凡',
                        money: '120元',
                        serve: '亲情话机',
                    },
                ],
                totalPay: 0,
            }
        },
        methods: {
            pay(item) {
                this.studentVisible = true
            },
            goPay() {
                // 去支付 支付成功显示成功
                this.payVisible = true
            },
            chooseService(index) {
                // 选择购买的类型
                let telTypes = this.telTypes,
                    length = telTypes.length,
                    isPay = !telTypes[index].pay

                if (index == length - 1) {
                    telTypes.map((item) => (item.pay = isPay))
                    return
                }

                this.$set(telTypes[index], 'pay', isPay)

                let noChoice = telTypes.findIndex((item) => !item.pay)
                if (noChoice == length - 1 || noChoice == -1) {
                    telTypes[length - 1].pay = true
                } else {
                    telTypes[length - 1].pay = false
                }
            },
        },
        components: {},
        watch: {
            telTypes: {
                handler(newVal) {
                    let totalPay = 0
                    newVal.forEach((item) => {
                        if (item.pay && !item.all) {
                            totalPay += Number(item.money)
                        }
                    })
                    this.totalPay = totalPay
                },
                deep: true,
            },
        },
    }
</script>

<style  lang="scss" >
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
    .pay-box .time {
        width: 150px;
    }
</style>
