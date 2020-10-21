<template>
    <div
        class="flex ali-cen jus-start bg-white p-7 pos-rel my-6 bor-rad5 student-box"
        :class="{ active: isActive }"
    >
        <div class="flex flex-col jus-between txt-cen">
            <img
                src="../assets/img/avator.png"
                style="width: 1.35rem; height: 1.35rem"
            />
            <p class="fs-16 fs-bold txt-tit lh-1.5 mt-3">
                {{ curStudent.name }}
            </p>
        </div>
        <div class="fs-12 txt-info pl-7">
            <p class="lh-2">班级：{{ curStudent.grade }}</p>
            <p class="lh-2">学校：{{ showSchool(curStudent.schoolId) }}</p>
            <p class="lh-2">学号：{{ curStudent.studentNumber }}</p>
            <p class="lh-2">一卡通号：{{ curStudent.cardId }}</p>
        </div>
        <slot name="btn"></slot>
    </div>
</template>

<script>
    export default {
        name: 'Person',
        props: {
            student: {
                type: Object,
                default: () => {
                    return {}
                },
            },
            isActive: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                curStudent: {},
            }
        },
        methods: {
            showSchool(schoolId) {
                let schools = this.$store.state.schools,
                    school = schools.find((item) => item.id == schoolId),
                    schoolName = school ? school.name : ''
                return schoolName
            },
        },
        created() {
            if (Object.keys(this.student).length) {
                this.curStudent = this.student
            } else {
                this.curStudent = this.$store.state.curStudent
            }
        },
    }
</script>


<style lang="scss" scoped>
    .student-box {
        &.active {
            background-color: #389cf0;
            & p {
                color: #fff !important;
            }
        }
    }
</style>
