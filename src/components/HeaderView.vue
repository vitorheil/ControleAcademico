<template>
  <div class="header">
    <img class="logoUdesc" src="../assets/udesc.jpg" />
    <button class="btnSair">Sair</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.logoUdesc{ 
    width: 10rem;
}
*{
    margin: 0px;
    padding: 0px;
}
.header{
    display: flex;
    background: black;
    
    justify-content: space-between;
}
.btnSair{
    display: flex;
    font-size: 2rem;
    border: none;
    background: black;
    color: white;
    padding: 40px;
}
</style>