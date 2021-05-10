<template>
  <div class="details">
    <router-link class="details__back" :to="{ name: 'Home' }">
      <i class="fas fa-arrow-left"></i> Back
    </router-link>

    <div>
      <img :src="detail.flag" :alt="detail.name" />

      <div class="container">
        <div class="first-col">
          <h1>{{ detail.name }}</h1>
          <p><span>Native Name:</span> {{ detail.nativeName }}</p>
          <p><span>Population:</span> {{ detail.population }}</p>
          <p><span>Region:</span> {{ detail.region }}</p>
          <p><span>Sub Region:</span> {{ detail.subregion }}</p>
          <p><span>Capital:</span> {{ detail.capital }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryDetail',
  data() {
    return {
      code: null,
      api: 'https://restcountries.eu/rest/v2/alpha/',
      detail: [],
    }
  },
  async mounted() {
    this.code = this.$route.params.id

    const res = await fetch(this.api + this.code)
    const data = await res.json()

    this.detail = data
    console.log(this.detail)
  },
}
</script>

<style lang="scss" scoped>
.details {
  padding: 1rem;
  margin-top: 2rem;

  @media (min-width: 760px) {
    padding: 1.3rem 1.7rem;
  }

  &__back {
    padding: 0.6rem 2rem;
    background: hsl(0, 0%, 100%);
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    color: hsl(200, 15%, 8%);

    i {
      margin-right: 0.4rem;
      color: hsl(200, 15%, 8%);
    }
  }

  > div {
    margin-top: 2rem;

    .container {
      .first-col {
        margin-bottom: 0.7rem;

        h1 {
          font-size: 1.3rem;
          margin: 1.2rem 0;
        }
        p {
          span {
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>