<template>
  <div class="home">
    <form>
      <input type="text" placeholder="Search for a country..." />
    </form>
    <Countries />
  </div>
</template>

<script>
import Countries from '../components/Countries'

export default {
  name: 'Home',
  components: { Countries },
}
</script>

<style scoped lang="scss">
.home {
  padding: 1rem;
  margin-top: 1.4rem;

  @media (min-width: 760px) {
    padding: 1.3rem 1.7rem;
  }
}

form {
  input {
    width: 100%;
    padding: 0.866rem 0.4rem;
    border: none;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    border-radius: 5px;
    max-width: 600px;
    margin-bottom: 1.8rem;

    &:active {
      outline: none;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
