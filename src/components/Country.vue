<template>
  <img :src="country.flag" :alt="country.name" />
  <div class="country-details">
    <h3>{{ country.name }}</h3>
    <p><span>Population:</span> {{ country.population }}</p>
    <p><span>Region:</span> {{ country.region }}</p>
    <p><span>Capital:</span> {{ country.capital }}</p>
  </div>
</template>

<script>
export default {
  name: 'Country',
  props: ['country'],
}
</script>

<style lang="scss" scoped>
img {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.country-details {
  padding: 1.2rem;

  h3 {
    margin-bottom: 0.6rem;
    color: hsl(200, 15%, 8%);
  }

  p {
    color: hsl(200, 15%, 8%);
    span {
      font-weight: 600;
      color: hsl(200, 15%, 8%);
    }
  }
}
</style>