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
        created() {},
    }
</script>

<style lang="scss" scoped>
    #app {
        overflow-y: scroll;
    }
</style>

