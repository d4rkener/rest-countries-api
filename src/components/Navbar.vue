<template>
  <nav class="nav">
    <h1 class="nav__heading">Where in the world?</h1>
    <div class="nav__dark">
      <i class="fas fa-moon"></i>
      Dark Mode
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped>
.nav {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  @media (min-width: 760px) {
    padding: 1.3rem 1.7rem;
  }

  &__heading {
    font-size: 1.2rem;

    @media (min-width: 760px) {
      font-size: 1.36rem;
    }

    @media (min-width: 1000px) {
      font-size: 1.6rem;
    }
  }

  &__dark {
    @media (min-width: 760px) {
      font-size: 0.9rem;
    }
    @media (min-width: 760px) {
      font-size: 1.1rem;
    }
  }
}
</style>