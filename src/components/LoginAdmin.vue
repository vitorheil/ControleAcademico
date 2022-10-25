<template>
  <div class="container">
    <div class="loginUsuario">
        <div class="loginCentral">
        <form action="">
        <p>Usuario</p>
        <input type="text">
        <p>Senha</p>
        <input type="password">
        </form>
        <div class="btnAll">
        <button class="btnLogar">Logar</button>
        <button class="btnEsqueceuSenha">Esqueceu a Senha?</button>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
   
}
</script>

<style>
.loginUsuario{
    display: flex;
    width: 40%;
    height: 30vh;
    background: darkgrey;
    border-radius: 5px;
}

input{
    border: 1px solid black;
    border-radius: 3px;
}

.container{
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.btnLogar{
    
    width: 6rem;
    height: 4vh;
}
.btnEsqueceuSenha{
   
    width: 6rem;
    height: 4vh;
}
.loginCentral{
    display: block;
    width: 30%;
    height: 30vh;
    align-items: center;
    margin: auto;
}

</style>