<template>
  <div class="home col-8 mx-auto py-5 mt-5">
    <h1>Dashboard</h1>
    <div class="card">
      <div class="card-body" v-if="user">
        <h3>Hello, {{ user.name }}</h3>
        <span>{{ user.email }}</span>
         <div class='todoListContainer'>
        <div class='heading'>
            <h2 id='title'>Todo List</h2>
            <add-item-form
               v-on:reloadlist="getList()"
            />
        </div>
        <list-view 
           :items="items" 
           v-on:reloadlist="getList()"
           />
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../apis/User";
import addItemForm from '../vue/addItemForm'
import listView from '../vue/listView'


export default {
    components:{
        addItemForm,
        listView
    },
    data: function(){
        return {
            items:[],
             user: null
        }
    },
    mounted() {
    User.auth().then(response => {
      this.user = response.data;
      console.log("aaaaaaaaaaaaaauser   "+response);
    }).catch(error => {
                console.log("rrrrrrrrrrrrrrrrrrr",error)
            });
  },
    methods: {
        getList(){
            axios.get('api/items')
            .then(response => {
                this.items = response.data
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    created(){
        this.getList();
    }
    
}
</script>
<style>
.todoListContainer {
    width:350px;
    margin:auto;
}
.heading{
    background: #c6c6c6;
    padding: 10px;
}
#title{
    text-align:center;
}
</style>

