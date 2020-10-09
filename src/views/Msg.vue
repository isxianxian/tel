<template>
    <div class="h-100 bg-gray">
        <div class="px-7 py-5">
            <div>
                <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="content"
                >
                </el-input>
            </div>
            <div
                class="bg-green bor-rad5 txt-cen fs-12 txt-white my-4"
                style="height: 1rem; line-height: 1rem"
            >
                推送
            </div>
            <div>
                <div class="label"><span>消息记录（张一凡）</span></div>
                <div
                    class="p-6 bg-white mb-6 bor-rad5"
                    v-for="(item, index) in msgList"
                    :key="index"
                >
                    <div class="txt-primary mb-4">{{ item.time }}</div>
                    <div>{{ item.content }}</div>
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
                content: '',
                msgList: [
                    {
                        time: '2020/10/19',
                        content:
                            '“我走了；到那边来信！”我望着他走出去。他走了几步，回过头看见我，说，“进去吧，里边没人。”等他的背影混入来来往往的人里，再找不着了，我便进来坐下，我的眼泪又来了',
                    },
                    {
                        time: '2020/10/19',
                        content:
                            '“我走了；到那边来信！”我望着他走出去。他走了几步，回过头看见我，说，“进去吧，里边没人。”等他的背影混入来来往往的人里，再找不着了，我便进来坐下，我的眼泪又来了',
                    },
                    {
                        time: '2020/10/19',
                        content:
                            '“我走了；到那边来信！”我望着他走出去。他走了几步，回过头看见我，说，“进去吧，里边没人。”等他的背影混入来来往往的人里，再找不着了，我便进来坐下，我的眼泪又来了',
                    },
                ],
            }
        },
        components: {},
    }
</script>

<style lang="scss" >
</style>
