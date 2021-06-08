<template>
  <p class="demo">
    {{ message }}
  </p>
</template>

<script>
  export default {
    props: [
      'message'
    ],
    data() {
      return {
        msg: 'Hello this is <demo-component>'
      }
    }
  }
</script>
