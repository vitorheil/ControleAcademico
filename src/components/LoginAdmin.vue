<template>
  <div class="container">
    <div class="loginUser">
        <div class="loginCenter">
        <form class="formLogin" action="">
            <p class="user">Usuario</p>
            <input type="text">
            <p class="password">Senha</p>
            <input type="password">
        </form>
            <div class="btnAll">
            <button class="btnLogin">Logar</button>
            <button class="btnPassword">Esqueceu a Senha?</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
    data(){
        return{

        }
    },
   
}
</script>

<style>
.loginUser{
    display: flex;
    width: 35rem;
    height: 30vh;
    background: rgb(77, 76, 76);
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.container{
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btnLogin{
    width: 6rem;
    height: 4vh;
    border: none;
    color: white;
    background: green;
    border-radius: 6px;
    margin: 0 15px;
    cursor: pointer;
}
.btnLogin:hover{
    background: greenyellow;
}
.btnPassword{ 
    width: 6rem;
    height: 4vh;
    border: none;
    color: white;
    background: greenyellow;
    border-radius: 6px;
    cursor: pointer;
}
.btnPassword:hover{ 
    width: 6rem;
    height: 4vh;
    border: none;
    color: white;
    background: green;
    border-radius: 6px;
    cursor: pointer;
}
.formLogin{
    display: inline-block;
    padding: 20px;
    margin-top: 1rem;
    margin-left: 8rem;   
}
.user{
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    color: white;
}
.password{
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    color: white;
}
.btnAll{
    display: flex;
    margin-left: 19rem;
    margin-top: 1rem;
}
input{
    border-radius: 5px;
    width: 16rem;
    height: 2vh;
    border: none;
}

</style>