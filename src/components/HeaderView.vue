<template>
  <div class="header">
    <img class="Udesc" src="../assets/udesc.jpg" />
    <button class="btnLeave">Sair</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.Udesc{ 
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
.btnLeave{
    display: flex;
    font-size: 2rem;
    border: none;
    background: black;
    color: white;
    padding: 40px;
}
</style>