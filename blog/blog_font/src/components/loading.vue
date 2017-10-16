<template>
  <div>加载中</div>
</template>
<script>
    import {DEFAULTDATA } from '../store/action_type'
    import {  mapActions } from "vuex";
    export default {
        name: 'index',
        mounted() {
            this.headdataFn(this)
        },
        methods: {
            ...mapActions({
                headdataFn: DEFAULTDATA.actions
            })
        }
    }
</script>
<style scoped>
    ul {  font-size: 0.4rem}
    .mint-loadmore {font-size: 0.48rem }
</style>