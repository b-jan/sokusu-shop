<template>
  <div id="root">
    <Header id="header"/>

    <!-- <section class="sidebar">
      <ul class="collections">
        <li
          v-for="collection in this.$store.state.globalData.collectionTree"
          v-if="collection.slug"
          :key="collection._id"
          class="collection"
        >
          <router-link :to="'/collection/' + collection.slug.current">
            {{ collection.title }}
          </router-link>
          <ul v-if="collection.children" class="sub-collections">
            <li
              v-for="subcollection in collection.children"
              v-if="subcollection.slug"
              :key="collection._id + subcollection._id"
            >
              <router-link :to="'/collection/' + subcollection.slug.current">
                {{ subcollection.title }}
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

ul.collections {
  font-weight: 500;
  display: none;
  margin: 0 0 0.5rem 0;
  padding: 1rem;
}

.sub-collections {
  padding: 0;
  margin: 0;
  padding-left: 0.8rem;
}

.sub-collections li {
  display: block;
  margin: 0.5em;
  padding: 0;
}

@media only screen and (min-width: 500px) {
  ul.collections {
    display: block;
  }
}

.collection {
  display: block;
  margin: 0 0 0.1rem 0;
  padding: 0;
}

.collection .nuxt-link-active {
  font-weight: 700;
}

ul.collections :global(a) {
  text-decoration: none;
}
</style>
