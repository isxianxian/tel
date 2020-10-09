<template>
    <div class="top-nav bg-primary txt-cen pos-rel txt-white fs-14">
        <div v-if="back" class="back-icon" @click="backPage">
            <div class="el-icon-arrow-left icon"></div>
        </div>
        <div>
            {{ tit }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Head',
        props: {
            tit: String,
            back: Boolean,
        },
        methods: {
            backPage() {
                this.$router.go(-1)
            },
        },
    }
</script>


