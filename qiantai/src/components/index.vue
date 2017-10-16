<template>
  <div class="index">
   
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  computed:{
    ...mapState([
      'navData',
      'articalData'
    ])
  },
  created(){
    if(!this.navData){
      this.$router.push({path:'/loading'})
    }
  }
}
</script>
<style scoped>
	*{
		list-style-type: none;
		padding: 0;
	}
h1, h2 {
  font-weight: normal;
}


li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
