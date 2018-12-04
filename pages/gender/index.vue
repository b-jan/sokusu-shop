<template>
  <section>
    <div>
      <h1 class="title">
        genders
      </h1>
      <ul class="genders">
        <li v-for="gender in this.$store.state.globalData.genders" v-if="gender.slug" :key="gender._id" class="gender">
          <router-link :to="'/gender/' + gender.slug.current" class="link">
            <SanityImage v-if="gender.banner" :image="gender.Banner" class="image" />
            <div class="meta">
              <span class="genderTitle">{{ gender.title }}</span>
              &nbsp;<span class="qty">({{ gender.productQty }})</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import SanityImage from "~/components/SanityImage"

export default {
  components: {
    SanityImage
  }
}
</script>

<style scoped>
.genders {
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4em;
  margin-top: 4em;
}

.gender {
  display: block;
  margin: 0;
  padding: 0;
}

.meta {
  padding-top: 1rem;
  text-align: center;
}

.link {
  text-decoration: none;
  display: subgrid;
  grid-template-rows: 3fr 1fr;
}

.genderTitle {
  font-size: 1.5em;
}

.image {
  display: block;
  max-height: 5em;
  max-width: 10em;
  margin: 0 auto;
}
</style>
