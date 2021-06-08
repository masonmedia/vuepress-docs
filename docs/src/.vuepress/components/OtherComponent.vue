<template>
  <div style="display: flex; mx-auto" >
    <div
    style="padding: 20px; margin: 10px auto; border: 1px solid lightgrey; border-radius: 14px;"
    >
     <!-- v-for="i in items" :key="i.id" -->
      <img :src="items.icon_url"/>
      <hr />
      <p>{{items.value}}</p>
      <!-- <h2>{{i.first_name}} {{i.last_name}}</h2> -->
      <!-- <img :src="items.icon_url"/> -->
    </div>  
  </div>
</template>

<script>
// const axios = require('axios')

import axios from 'axios'

export default {
  data () {
      return {
          items: []
      }
  },
  beforeMount() {
    axios.get('https://api.chucknorris.io/jokes/random')
    // axios.get('https://reqres.in/api/users')
    .then(response => {
       this.$data.items = response.data
       console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
  }
}
</script>