<template>
  <div id="root">
    <Header id="header"/>

    <!-- <section class="sidebar">
      <ul class="categories">
        <li
          v-for="category in this.$store.state.globalData.categoryTree"
          v-if="category.slug"
          :key="category._id"
          class="category"
        >
          <router-link :to="'/category/' + category.slug.current">
            {{ category.title }}
          </router-link>
          <ul v-if="category.children" class="sub-categories">
            <li
              v-for="subCategory in category.children"
              v-if="subCategory.slug"
              :key="category._id + subCategory._id"
            >
              <router-link :to="'/category/' + subCategory.slug.current">
                {{ subCategory.title }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </section> -->

    <section id="content">
      <nuxt/>
    </section>

    <Footer />

  </div>
</template>


<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  },
}
</script>

<style lang="scss" scoped>

#root {
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#content {
  font-family: 'Lato';
  font-size: 18px;
  flex-direction: row;
  flex: 1;
}





section.sidebar {
  grid-area: sidebar;
  border-right: 1px solid #ddd;
}

section.content {
  grid-area: content;
  padding: 1rem;
}

@media only screen and (min-width: 500px) {
  section.content {
    padding: 0rem 1rem 1rem 0rem;
  }
}

ul.categories {
  font-weight: 500;
  display: none;
  margin: 0 0 0.5rem 0;
  padding: 1rem;
}

.sub-categories {
  padding: 0;
  margin: 0;
  padding-left: 0.8rem;
}

.sub-categories li {
  display: block;
  margin: 0.5em;
  padding: 0;
}

@media only screen and (min-width: 500px) {
  ul.categories {
    display: block;
  }
}

.category {
  display: block;
  margin: 0 0 0.1rem 0;
  padding: 0;
}

.category .nuxt-link-active {
  font-weight: 700;
}

ul.categories :global(a) {
  text-decoration: none;
}
</style>
