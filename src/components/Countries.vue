<template>
  <div class="countries">
    <div class="country" v-for="country in countries" :key="country.area">
      <Country :country="country" />
    </div>
  </div>
</template>

<script>
import Country from './Country'

export default {
  name: 'Countries',
  components: { Country },
  data() {
    return {
      api: 'https://restcountries.eu/rest/v2/all',
      countries: [],
    }
  },
  async mounted() {
    const res = await fetch(this.api)
    const data = await res.json()

    this.countries = data
  },
}
</script>

<style lang="scss" scoped>
.countries {
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .country {
    max-width: 300px;
    margin: 0 auto;
    background: hsl(0, 0%, 100%);
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    border-radius: 5px;

    @media (min-width: 1000px) {
      width: 90%;
    }

    &:not(:last-child) {
      margin-bottom: 1.2rem;
    }
  }
}
</style>