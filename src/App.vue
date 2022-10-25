<template>
  <div>
    <header-view></header-view>
    <!-- <login-admin></login-admin> -->
    <selection-view></selection-view>
  </div>
</template>



<script>
import HeaderView from "./components/HeaderView.vue"
// import LoginAdmin from "./components/LoginAdmin.vue"
import SelectionView from "./components/HomeAdmin.vue"
export default {
 
  data(){
    return{

    }
  },
  components: {
    HeaderView,
    // LoginAdmin,
    SelectionView,
  }
}
</script>



<style>

</style>