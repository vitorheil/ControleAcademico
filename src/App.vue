<template>
  <div>
    <header-view></header-view>
    <login-admin></login-admin>
  </div>
</template>



<script>
import HeaderView from "./components/HeaderView.vue"
import LoginAdmin from "./components/LoginAdmin.vue"
export default {
 
  data(){
    return{

    }
  },
  components: {
    HeaderView,
    LoginAdmin,
  }
}
</script>



<style>

</style>