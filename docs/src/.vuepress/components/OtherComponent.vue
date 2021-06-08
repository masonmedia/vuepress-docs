<template>
  <div style="display: flex;" >
    <div
    style="padding: 20px; margin: 10px; border: 1px solid darkgrey; border-radius: 14px;"
    v-for="i in items" :key="i.id">
      <h2>{{i.first_name}} {{i.last_name}}</h2>
      <img :src="i.avatar"/>
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
    axios.get('https://reqres.in/api/users')
    .then(response => {
       this.$data.items = response.data.data
       console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
  }
}
</script>