<template>
  <footer>
    <div class="site-footer">
      <section class="site-footer__help">
        <ul>
          <nuxt-link to="/"><li>Returns</li></nuxt-link>
          <nuxt-link to="/"><li>Shipping</li></nuxt-link>
          <nuxt-link to="/"><li>Contact</li></nuxt-link>
        </ul>
      </section>

      <section class="site-footer__social">
        <ul>
          <nuxt-link class="test" to="/"><li><img src="~/assets/images/brands/facebook.png" alt="facebook"></li></nuxt-link>
          <nuxt-link to="/"><li><img src="~/assets/images/brands/instagram.png" alt="instagram"></li></nuxt-link>
          <nuxt-link to="/"><li><img src="~/assets/images/brands/twitter.png" alt="twitter"></li></nuxt-link>
        </ul>
      </section>

      <section class="site-footer__legal">
        <p>Copyright © sokusu 2018</p>
        <ul>
          <nuxt-link to="/"><li>Terms & conditions</li></nuxt-link>
          <nuxt-link to="/"><li>Privacy</li></nuxt-link>
          <nuxt-link to="/"><li>Legal Notice</li></nuxt-link>
        </ul>
      </section>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>

<style lang="scss" scoped>
  footer {
    font-family: 'Moderne-Sans';
    background-color: $main-primary-color;
    text-align: center;
    z-index: 1;
    -webkit-box-shadow: 0 -3px 5px rgba(57, 63, 72, 0.2);
    -moz-box-shadow: 0 -3px 5px rgba(57, 63, 72, 0.2);
    box-shadow: 0 -3px 5px rgba(85, 105, 136, 0.2);
  }

  a {
    color: $main-light-color;
  }

  .site-footer {
    padding: 40px 0 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    &__help, &__legal {
      margin-bottom: 20px;

      p {
        color: $main-light-color;
        margin: 24px;
      }

      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 80px;

        li {
          color: $main-light-color;
          transition: color .4s ease;

          &:hover {
            color: rgba(255, 255, 255, 0.4);
            transition: color .4s ease;
          }
        }
      }
    }

    &__social {
      ul {
        display: flex;
        flex-direction: row;

        li {
          margin: 10px;
          padding: 30px;
          background-color: $main-primary-color;
          border: 2px solid $main-light-color;
          transition: background-color .4s ease;

          &:hover {
            background-color: rgba(255, 255, 255, 0.4);
            transition: background-color .4s ease;
          }
        }
      }
    }
  }
</style>
