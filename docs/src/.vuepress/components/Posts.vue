<template>
  <div class="post-container">
    <router-link v-for="page in pages" :to="page.path" :key="page.id">

      <div class="post-card">
        <img class="article-image" :src="page.frontmatter.img" />
        <div class="page-detail">
          <h3 class="page-title">{{ page.title }}</h3>
          <h5 class="page-description">{{ page.frontmatter.description }}</h5>
          <p class="page-author">Author: {{ page.frontmatter.author }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pages: []
    }
  },
  mounted() {
    this.$site.pages.forEach(page => {
      if (page.frontmatter.type === 'article') {
        this.pages.push(page)
      }
    })
  }
}
</script>

<style scoped>

h3, h5, p {
    margin: 0;
}
h5 {
    padding: 10px 0 5px;
}
.post-container {
  display: flex;
  /* flex-wrap: wrap;
  width: 100%; */
}
.post-card {
    flex-flow: column wrap;
    flex: 1 0 300px;
  /* width: 100%; */
  /* height: 150px; */
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 13px;
  /* padding: 20px; */
  display: flex;
  align-items: center;
}
.article-image {
  /* height: 100%; */
  width: 100%;
  height: auto;
}
.page-detail {
    padding: 30px;
}

.description {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>