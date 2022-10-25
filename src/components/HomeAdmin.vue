<template>
  <div class="container">
    <div class="adminContainer">
      <div class="homeAdmin">
        <div>
          <p class="nameTag">Usuario</p>
          <ph-user class="icon" />
        </div>  
      </div>
      <div class="homeAdmin">
        <div>
        <p class="nameTag">Matricula</p>
        <ph-address-book class="icon" :size="32" />
      </div>
      </div>
      <div class="homeAdmin">
        <div>
        <p class="nameTag">Matricula Turma </p>
        <ph-folder-simple-user class="icon" :size="32" />
        </div>
      </div>
      <div class="homeAdmin">
        <div>
        <p class="nameTag">Disciplina</p>
        <ph-books class="icon" :size="32" />
        </div>
      </div>
      <div class="homeAdmin">
        <div>
        <p class="nameTag">Papel</p>
        <ph-scroll class="icon" :size="32" />
        </div>
      </div>
      <div class="homeAdmin"> 
        <div>
        <p class="nameTag">Ação</p>
        <ph-scissors class="icon" :size="32" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PhUser, PhAddressBook, PhFolderSimpleUser, PhBooks, PhScroll, PhScissors } from "phosphor-vue";

export default {
 components: {
    PhUser,
    PhAddressBook,
    PhFolderSimpleUser,
    PhBooks,
    PhScroll,
    PhScissors,
 }
}
</script>

<style>

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
  margin-top: 25px;
  width: 12rem;
  height: 12vh;
  
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