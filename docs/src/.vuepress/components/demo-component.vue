<template>
  <div>
    <div class="" v-for="i in items" :key="i.id">
      <h2>{{ i.title }}</h2>
      <h4>{{ i.subtitle }}</h4>
      <p>{{ i.text }}</p>
    </div>
</div>
</template>

<script>
import data from '../public/content.json'

export default {
  data () {
      return {
          items: data
      }
  }
}
</script>
