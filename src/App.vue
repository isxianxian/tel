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
            let { page } = this.$route.query
            let goPayPage = page == 'pay' ? 1 : 0

            if (window.name == '') {
                localStorage.clear()
                localStorage.setItem('goPayPage', goPayPage)
                window.name = 'isFirstVisit'
            } else if (window.name == 'isFirstVisit') {
            }
        },
    }
</script>

<style lang="scss" scoped>
    #app {
        overflow-y: scroll;
    }
</style>

