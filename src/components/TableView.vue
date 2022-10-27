<template>
  <div class="container">
    <table class="tableHead">
        <thead>
            <tr >
                <th v-for="(header, index) in headersTable" :key="index" class="headers">
                    {{header.label}}
                </th>
                <th class="headers">Editar</th>
                <th class="headers">Excluir</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in data" :key="index" class="datas">
                <td v-for="(header, index) in headersTable" :key="index" class="data">
                    
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script >
export default {
    data(){
        return{
            
        }
    },
    props: {
        headersTable: Array,
        data: Array,
    }
}
</script>

<style>
    .tableHead{
        width: 100rem;
        height: 76vh;
        background: rgb(56, 54, 54);
        margin-left: 12rem;
        margin-top: 3rem;
        
    }
    .headers{
        display:inline-flex;    
        margin-left: 7.5rem;
        margin-top: 2rem;
        font-size: 1.25rem;
        color: white;

    }
</style>