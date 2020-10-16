<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data: function () {
            return {}
        },
        methods: {},
        created() {
            console.log('获取用户信息存储到vuex中 ， 判断用户状态')
        },
    }
</script>

<style lang="scss">
</style>
