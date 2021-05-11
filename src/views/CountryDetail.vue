<template>
  <div class="details">
    <router-link class="details__back" :to="{ name: 'Home' }">
      <i class="fas fa-arrow-left"></i> Back
    </router-link>

    <div>
      <div class="flag">
        <img :src="detail.flag" :alt="detail.name" />
      </div>

      <div class="container">
        <div class="first-col">
          <h1>{{ detail.name }}</h1>
          <p><span>Native Name:</span> {{ detail.nativeName }}</p>
          <p><span>Population:</span> {{ detail.population }}</p>
          <p><span>Region:</span> {{ detail.region }}</p>
          <p><span>Sub Region:</span> {{ detail.subregion }}</p>
          <p><span>Capital:</span> {{ detail.capital }}</p>
        </div>
        <div class="second-col">
          <p>
            Top Level Domain:
            <span v-for="domain in detail.topLevelDomain" :key="domain">{{
              domain
            }}</span>
          </p>
          <p>
            Currencies:
            <span v-for="currency in detail.currencies" :key="currency.name">{{
              currency.name
            }}</span>
          </p>
          <p>
            Languages:
            <span v-for="language in detail.languages" :key="language.name">
              {{ language.name }},
            </span>
          </p>
        </div>
        <div class="borders">
          <h1>Border Countries:</h1>
          <br />

          <div class="border-container">
            <div class="border" v-for="border in borders" :key="border">
              <span>{{ border }}</span>
            </div>
          </div>
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
      borders: [],
    }
  },
  async mounted() {
    this.code = this.$route.params.id

    const res = await fetch(this.api + this.code)
    const data = await res.json()

    this.detail = data
    this.borders = data.borders
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

    @media (min-width: 1000px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .flag {
      text-align: center;

      @media (min-width: 1000px) {
        text-align: unset;
        flex: 1;
      }
      img {
        width: 100%;
        max-width: 500px;

        @media (min-width: 1000px) {
          // max-width: unset;
        }
      }
    }
    .container {
      @media (min-width: 1000px) {
        flex: 1;
      }
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
      .second-col {
        p {
          font-weight: 600;
        }
        span {
          font-weight: 300;
        }
      }
      .borders {
        h1 {
          font-size: 1.3rem;
          margin: 1.2rem 0;
          font-weight: 600;
        }

        .border-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;

          .border {
            --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
              var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            color: hsl(200, 15%, 8%);
            text-align: center;

            span {
              padding: 1.2rem;
            }
          }
        }
      }
    }
  }
}
</style>