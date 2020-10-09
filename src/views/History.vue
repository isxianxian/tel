<template>
    <div class="history h-100 bg-gray">
        <TopNav tit="历史趋势" :back="true" />
        <div class="px-7">
            <div class="my-7 flex ali-cen">
                <div class="flex-1 one-elli mr-2 fs-bold">
                    2019-2020学期***其中考试学期***其中考试（张一凡）
                </div>
                <div class="pos-rel" style="width: 2.4rem">
                    <span
                        class="el-icon-s-grid txt-primary pos-abs menu-icon"
                        style="z-index: 1"
                    ></span>
                    <el-select v-model="type" @change="changeType">
                        <el-option
                            class="subject"
                            v-for="item in types"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="bg-white bor-rad5 txt-cen pt-4">
                <p class="fs-bold txt-tit">总分历史趋势</p>
                <div class="chart" id="history"></div>
            </div>
        </div>
    </div>
</template>

<script>
    var echarts = require('echarts'),
        historyChart = ''
    export default {
        name: 'Home',
        data: function () {
            return {
                type: 0,
                types: [
                    { label: '总分', value: 0 },
                    { label: '语文', value: 1 },
                    { label: '数学', value: 2 },
                    { label: '英语', value: 3 },
                    { label: '物理', value: 4 },
                ],
                record: [
                    { type: '语文', count: 120 },
                    { type: '语文', count: 120 },
                    { type: '语文', count: 120 },
                ],
            }
        },
        methods: {
            setBar(data) {
                let option = {
                    // tooltip: {
                    //     trigger: 'axis',
                    //     axisPointer: {
                    //         type: 'shadow',
                    //     },
                    // },
                    legend: {
                        data: ['2011年', '2012年'],
                    },
                    grid: {
                        top: '5%',
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true,
                    },
                    xAxis: {
                        show: false,
                    },
                    yAxis: [
                        {
                            type: 'category',
                            axisLine: { show: false },
                            axisTick: { show: false },
                            axisLabel: {
                                color: '#343434',
                            },
                            data: ['2016', '2017', '2018', '2019', '2020'],
                        },
                        {
                            type: 'category',
                            axisLine: {
                                show: false,
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLabel: {
                                show: true,
                                inside: false,
                                textStyle: {
                                    color: '#666666',
                                },
                            },
                            splitArea: {
                                show: false,
                            },
                            splitLine: {
                                show: false,
                            },
                            data: [18203, 23489, 29034, 10497, 13174, 63023],
                        },
                    ],
                    series: [
                        {
                            type: 'bar',
                            data: [18203, 23489, 29034, 10497, 13174, 63023],
                            itemStyle: {
                                color: '#389CF0',
                            },
                            barMaxWidth: 10,
                            barCategoryGap: 10,
                        },
                    ],
                }
                return option
            },
            changeType(item) {
                console.log(item)
            },
        },
        components: {},
        mounted() {
            this.$nextTick(() => {
                // 基于准备好的dom，初始化echarts实例
                historyChart = echarts.init(document.getElementById('history'))
                // 绘制图表
                let option = this.setBar()
                historyChart.setOption(option)
            })
        },
    }
</script>

<style lang="scss" >
    .history {
        .menu-icon {
            top: 12px;
            left: 16px;
            font-size: 30px;
        }
        .chart {
            height: 400px;
        }
        .el-select {
            .el-input__inner {
                font-size: 12px; /* no */
                height: 50px;
                line-height: 50px;
                padding-left: 60px;
                padding-right: 30px;
                color: #343434;
            }
            .el-input__icon {
                width: 20px;
                line-height: 50px;
            }
        }
    }

    .el-scrollbar {
        .subject.el-select-dropdown__item {
            font-size: 12px; /* no */
            height: 60px;
            line-height: 60px;
            padding: 0;
            text-align: center;
            color: #343434;
            &.selected {
                background-color: #cfeaff;
                font-weight: normal;
            }
        }
    }
</style>

