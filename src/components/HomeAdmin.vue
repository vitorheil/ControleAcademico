<template>
  <div class="container">
    <div class="adminContainer">
      <div class="homeAdmin" v-for="(opcao, index) in listaOpcoes" :key="index">
        <div>
              <p class="nameTag">{{opcao.secao}}</p>
              <font-awesome-icon 
              :icon="opcao.icone" 
              class="icon"
              />
        </div>
        </div>
      </div>
    </div>
  
</template>

<script>


export default {
  name: "HomeAdmin",
  data(){
    return{
      listaOpcoes: [
        {
          secao: "USUARIOS",
          icone: "fa-solid fa-user",
          path: "users",
        },
        {
          secao: "MATRICULA",
          icone: "fa-solid fa-book",
          path: "enrolled",
        },
        {
          secao: "TURMA",
          icone: "fa-solid fa-book-open-reader",
          path: "enrolledClass",
        },
        {
          secao: "DISCIPLINAS",
          icone: "fa-solid fa-book-open",
          path: "subjects",
        },
        {
          secao: "PAPEL",
          icone: "fa-solid fa-scroll",
          path: "role",
        },
        {
          secao: "ACAO",
          icone: "fa-solid fa-location-crosshairs",
          path: "action",
        },
      ]
    }
  }
}
</script>

<style scoped>

.homeAdmin{
  width: 20rem;
  height: 14rem;
  background: rgb(56, 54, 54);
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}
.homeAdmin:hover{
  background: rgb(77, 76, 76);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.adminContainer{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80rem;
  height: 70vh;
  margin-left: 300px;
  margin-top: 60px;
}

.homeAdmin{
  display: flex;
  justify-content: center;
  margin: auto;
}
.icon{
  color: white;
  margin-top: 30px;
  width: 10rem;
  height: 10vh;
  
}
.icon:hover{
  color: black;
}
.nameTag{
  display: flex;
  color: white;
  font-size: 1.5rem;
  margin-top: 15px;
  justify-content: center;
}


</style>