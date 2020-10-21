<template>
    <div class="home h-100">
        <TopNav :back="false" :tit="navTit"></TopNav>
        <div class="main">
            <router-view></router-view>
        </div>
        <div
            class="bottom-nav flex txt-cen txt-border bor-t"
            v-show="hasCurStudent"
        >
            <div
                class="flex-1"
                :class="[tabIndex == 0 ? 'active txt-primary' : '']"
                @click="changeTab(0)"
            >
                <div class="bg icon0"></div>
                <div>首页</div>
            </div>
            <div
                class="flex-1"
                :class="[tabIndex == 1 ? 'active txt-primary' : '']"
                @click="changeTab(1)"
            >
                <div class="bg icon1"></div>
                <div>亲情话机</div>
            </div>
            <div
                class="flex-1"
                :class="[tabIndex == 2 ? 'active txt-primary' : '']"
                @click="changeTab(2)"
            >
                <div class="bg icon2"></div>
                <div>消息推送</div>
            </div>
            <div
                class="flex-1"
                :class="[tabIndex == 3 ? 'active txt-primary' : '']"
                @click="changeTab(3)"
            >
                <div class="bg icon3"></div>
                <div>成绩查询</div>
            </div>
            <div
                class="flex-1"
                :class="[tabIndex == 4 ? 'active txt-primary' : '']"
                @click="changeTab(4)"
            >
                <div class="bg icon4"></div>
                <div>商店</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Home',
        data: function () {
            return {
                tabIndex: 0,
                navTit: '机构名称',
            }
        },
        methods: {
            changeTab(index) {
                this.tabIndex = index
                let obj = {
                    0: '/home',
                    1: '/tel',
                    2: '/msg',
                    3: '/fraction',
                    4: '/store',
                }
                this.$router.push(obj[index])
            },
        },
        computed: {
            ...mapState(['hasCurStudent']),
        },
        created() {
            let { path } = this.$route,
                obj = {
                    '/home': 0,
                    '/tel': 1,
                    '/msg': 2,
                    '/fraction': 3,
                    '/store': 4,
                }
            this.tabIndex = obj[path]
        },
    }
</script>

<style scoped  lang="scss" >
    .home {
        .main {
            height: calc(100% - 219px);
        }
        .bottom-nav {
            height: 80px;
            padding-top: 10px;
            font-size: 9px; /* no */
            .bg {
                display: inline-block;
                width: 48px;
                height: 48px;
            }
            .icon0 {
                background-image: url('../assets/img/nav1.1.png');
            }
            .icon1 {
                background-image: url('../assets/img/nav2.1.png');
            }
            .icon2 {
                background-image: url('../assets/img/nav3.1.png');
            }
            .icon3 {
                background-image: url('../assets/img/nav4.1.png');
            }
            .icon4 {
                background-image: url('../assets/img/nav5.1.png');
            }

            .active {
                .icon0 {
                    background-image: url('../assets/img/nav1.png');
                }
                .icon1 {
                    background-image: url('../assets/img/nav2.png');
                }
                .icon2 {
                    background-image: url('../assets/img/nav3.png');
                }
                .icon3 {
                    background-image: url('../assets/img/nav4.png');
                }
                .icon4 {
                    background-image: url('../assets/img/nav5.png');
                }
            }
        }
    }
</style>
