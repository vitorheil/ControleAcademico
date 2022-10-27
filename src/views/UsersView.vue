<template>
    <div class="container">
      <section>
          <TableView
              :data="users"
              :headersTable = "headersTable"
          />
      </section>
    </div>
  </template>
  
  <script>
  import TableView from "../components/TableView.vue"
  export default {
      name: "UsersView",
      data(){
          return{
              headersTable: [
                  {label: "Nome", value: {atribute: "name"}},
                  {label: "Sobrenome", value: {atribute: "surname"}},
                  {label: "CPF", value: {atribute: "cpf"}},
                  {label: "Email", value: {atribute: "email"}},
                  {label: "Telefone", value: {atribute: "phone"}},
                  {label: "Endereço", value: {atribute: "address"}},
              ],
              users: [],
          }
          
      },
      components: {
          TableView,
      }
  }
  </script>
  
  <style>
  
  </style>