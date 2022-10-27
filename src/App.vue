<template>
  <div>
    <header-view></header-view>
    <router-view></router-view>
  </div>
</template>



<script>
import HeaderView from "./components/HeaderView.vue"



export default {
  data(){
    return{
      
    }
  },
  components: {
    HeaderView,
  
  }
}
</script>



<style>

</style>