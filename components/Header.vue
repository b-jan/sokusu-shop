<template>
  <header>
    <div class="site-header">
      <nuxt-link :to="'/'" class="site-logo">
        <span>SOKUSU</span>
        <div class="site-logo__kanji-container">
          <span class="site-logo__kanji">原宿</span>
        </div>
      </nuxt-link>

      <nav class="nav-menu">
        <nuxt-link :to="'/man'" class="nav-menu__nav-link">Man</nuxt-link><!-- Mixte (5) -->
        <nuxt-link :to="'/woman'" class="nav-menu__nav-link">Woman</nuxt-link><!-- Mixte (5) -->
        <!-- <nuxt-link :to="'/collection'" class="nav-menu__nav-link">Paintings</nuxt-link> Mixte (5) -->
        <!-- <nuxt-link :to="'/gender'" class="nav-menu__nav-link">Animals</nuxt-link> Men (5) -->
        <!-- <nuxt-link :to="'/gender'" class="nav-menu__nav-link">Fruits</nuxt-link> Women (3) -->
        <!-- <nuxt-link :to="'/gender'" class="nav-menu__nav-link">Eyes</nuxt-link> Mixte (3) -->
        <!-- <nuxt-link :to="'/gender'" class="nav-menu__nav-link">Food</nuxt-link> Men (5) -->
        <!-- <nuxt-link :to="'/gender'" class="nav-menu__nav-link">Sex</nuxt-link> Mixte (5) -->
        <!-- <nuxt-link :to="'/gender'" class="nav-menu__nav-link">Weird</nuxt-link>Women (5) -->
      </nav>

      <div ref="cart" class="cart">
        <a href="#" class="snipcart-checkout">
          <div class="snipcart-summary">
            <img src="~/assets/images/cart.png" alt="cart" class="cart__icon">
            <span class="snipcart-total-items"/>
            <span> item(s)</span>
            <span class="snipcart-total-price"/>
          </div>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    mounted() {
      if (!window.Snipcart) {
        throw new Error(
          "Basket is currently unavailable"
        )
      }
      const cart = this.$refs.cart
      let timeoutId
      window.Snipcart.subscribe("item.adding", () => {
        cart.classList.add("pop")
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          cart.classList.remove("pop")
        }, 220)
      })
    }
  }
</script>

<style lang="scss" scoped>
  header {
    font-family: 'Moderne-Sans';
    background-color: $main-primary-color;
    color: $main-light-color;
    position: fixed;
    z-index: 1;
    width: 100%;
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.5);
    -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.5);
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.5);
  }

  a {
    color: $main-light-color;
  }

  .site-header {
    padding: 20px 20px 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .site-logo {
      font-size: 40px;
      display: flex;
      justify-content: flex-start;
      flex-shrink: 0;
      margin-right: 20px;
      text-shadow: 
      -1px 0 0 #ccc,
      -2px 0 0 #c9c9c9,
      -3px 0 0 #bbb,
      -4px 0 0 #b9b9b9,
      -5px 0 0 #aaa,
      -6px 0 1px rgba(0,0,0,.1),
      0 0 5px rgba(0,0,0,.1),
      -1px 0 3px rgba(0,0,0,.3),
      -3px 0 5px rgba(0,0,0,.2),
      -5px 0 10px rgba(0,0,0,.25),
      -10px 0 10px rgba(0,0,0,.2),
      -20px 0 20px rgba(0,0,0,.15);

      &__kanji-container {
        margin-left: 10px;
        display: flex;
      }

      &__kanji {
        align-self: flex-start;
        font-size: 20px;
        font-weight: bold;
        margin-top: -5px;
        padding-bottom: 0px;
      }
    }

    .nav-menu {
      font-size: 24px;
      display: flex;
      justify-content: flex-start;
      
      &__nav-link {
        text-align: center;
        margin: 0 25px;
        min-width: 100px;
        text-shadow: -2px 0px 3px rgba(0,0,0,0.3);
      }

      .active-link {
        color: $main-dark-color;
      }
    }

    .cart {
      font-size: 24px;
      margin-left: 20px;
      text-shadow: 2px 0px 3px rgba(0,0,0,0.3);

      .snipcart-summary {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .snipcart-total-items {
          margin-right: 10px;
        }
        
        .snipcart-total-price {
          margin-left: 20px;
        }
      }

      &__icon {
        margin: 0 20px 5px 0;
        -webkit-filter: drop-shadow(2px 0px 3px rgba(0,0,0,0.3));
        filter: drop-shadow(2px 0px 3px rgba(0,0,0,0.3));
      }
    }
  }

</style>
