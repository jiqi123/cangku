<template>
  <div class="index">
	  <header></header>
		<breadcast></breadcast>
		<el-row :gutter="24">
	    <el-col :span="17">
	      <router-view  class="grid-content"></router-view>
	    </el-col>
	    <el-col :span="7">
	    <div class="grid-content ">
	    <search></search>
	    <news></news>
	    <top></top>
	    </div>
	    </el-col>
		</el-row>
		<footers></footers>
	</div>
</template>
<script>
    import breadcast from "./breadcast";
    import header from "./header"
    import search from "./search"
    import top from "./top"
    import news from "./new"
    import detail from "./detail"
    import footers from "./footer"
    import action_type from "../store/action_type"
    import {mapState,mapActions } from "vuex"
    export default {
        name: 'hello',
        data() {
            return {
                activeIndex: '1',
                datalist: [{
                    one: 12,
                    two: [
                        1, 2, 3, 4
                    ]
                }]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        computed: {
            ...mapState({
                headData: (state) => state.headData
            })
        },
        components: {
            breadcast: breadcast,
            header: header,
            search: search,
            top: top,
            news: news,
            detail: detail,
            footers: footers
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm => {
                console.log(vm.headData)
                if (!vm.headData) {
                    vm.$router.push({
                        path: "/"
                    })
                }
            })
        }
    }
</script>
<style scoped>
    .index { width: 1200px; margin: 0 auto; }
    .borderR border-radius: 10px;  }
    .breadCrumb {height: 40px; line-height: 40px; padding-left: 20px;}
    .el-row {margin-bottom: 20px; }
    .el-row:last-child {margin-bottom: 0; }
    .el-col { border-radius: 4px;}
    .bg-purple-dark {background: #99a9bf; }
    .bg-purple {background: #d3dce6;}
    .bg-purple-light { background: #e5e9f2; }
    .grid-content { border-radius: 4px; min-height: 36px; }
    .row-bg { padding: 10px 0; background-color: #f9fafc;}
</style>