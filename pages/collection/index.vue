<template>
  <section>
    <div>
      <h1 class="title">
        Collections
      </h1>
      <ul class="collections">
        <li v-for="collection in this.$store.state.globalData.collections" v-if="collection.slug" :key="collection._id">
          <router-link :to="'/collection/' + collection.slug.current">
            {{ collection.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

li {
  display: block;
}
a {
  padding: 1em;
  display: block;
  font-size: 1em;
  text-decoration: none;
  text-align: center;
}

@media only screen and (min-width: 500px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
  }

  a {
    font-size: 2em;
  }
}
</style>
